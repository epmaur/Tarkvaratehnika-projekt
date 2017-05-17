package ttu.tteh.ad;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.http.NameValuePair;
import org.apache.http.client.ClientProtocolException;
import org.apache.http.client.HttpClient;
import org.apache.http.client.entity.UrlEncodedFormEntity;
import org.apache.http.client.methods.HttpPost;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.DefaultHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.message.BasicNameValuePair;
import org.apache.http.util.EntityUtils;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdController {

	@Value("${security.oauth2.client.clientId}")
	String clientId;

	@Value("${security.oauth2.client.clientSecret}")
	String clientSecret;

	private AdService adService;

	public AdController(AdService adService) {
		this.adService = adService;
	}

	@RequestMapping(value = "/ads/add", method = RequestMethod.POST, consumes = "application/json")
	public Ad addAd(@RequestBody Ad ad) {
		return adService.addAd(ad);
	}

	@RequestMapping(value = "/googleauth", method = RequestMethod.POST, consumes = "application/json")
	public Map<String, String> googleAuth(@RequestBody Map<String, String> login)
			throws ClientProtocolException, IOException, JSONException {
		try (CloseableHttpClient httpClient = HttpClientBuilder.create().build()) {
			HttpPost post = new HttpPost("https://accounts.google.com/o/oauth2/token");
			List<NameValuePair> pairs = new ArrayList<NameValuePair>();
			pairs.add(new BasicNameValuePair("code", login.get("code")));
			pairs.add(new BasicNameValuePair("client_id", login.get("clientId")));
			pairs.add(new BasicNameValuePair("client_secret", clientSecret));
			pairs.add(new BasicNameValuePair("redirect_uri", login.get("redirectUri")));
			pairs.add(new BasicNameValuePair("grant_type", "authorization_code")); 
			post.setEntity(new UrlEncodedFormEntity(pairs));
			org.apache.http.HttpResponse response = httpClient.execute(post);

			String responseBody = EntityUtils.toString(response.getEntity());

			JSONObject responseJson = new JSONObject(responseBody);
			Map<String, String> returnTokenMap = new HashMap<>();
			returnTokenMap.put("token", responseJson.getString("access_token"));
			return returnTokenMap;
		}
	}

	@RequestMapping(value = "/ads", method = RequestMethod.GET)
	public List<Ad> getAllAds() {
		return adService.getAllAds();
	}

	@RequestMapping(value = "/ads/delete", method = RequestMethod.POST, consumes = "application/json")
	public Long deleteAd(@RequestBody long id) {
		return adService.deleteAdById(id);
	}

	/*
	 * @RequestMapping(value = "/ads/{id}", method=RequestMethod.GET) public Ad
	 * getAd(@PathVariable("id") long adId) { return adService.getAdById(adId);
	 * }
	 */

	@RequestMapping(value = "/ads/{type}", method = RequestMethod.GET)
	public List<Ad> getAdByType(@PathVariable("type") String type) {
		return adService.getAdByType(type);
	}

	@RequestMapping(value = "/ads/params", method = RequestMethod.POST, consumes = "application/json")
	public List<Ad> filterAd(@RequestBody AdHelper adHelper) {
		return adService.filterAd(adHelper);
	}
}
