package ttu.tteh.ad;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdController {
	
	private AdService adService;

	public AdController(AdService adService) {
		this.adService = adService;
	}
	
	@RequestMapping(value="/ads/add", method=RequestMethod.POST,
			consumes = "application/json")
	public Ad addAd(@RequestBody Ad ad) {
		return adService.addAd(ad);
	}
	
	@RequestMapping(value="/ads", method=RequestMethod.GET)
	public List<Ad> getAllAds() {
		return adService.getAllAds();
	}
	
/*
	@RequestMapping(value = "/ads/{id}", method=RequestMethod.GET)
	public Ad getAd(@PathVariable("id") long adId) {
		return adService.getAdById(adId);
	}*/
	
	@RequestMapping(value = "/ads/{type}", method=RequestMethod.GET)
	public List<Ad> getAdByType(@PathVariable("type") String type) {
		return adService.getAdByType(type);
	}
}
