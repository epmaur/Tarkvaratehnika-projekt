package ttu.tteh.ad;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

@Service
public class AdService {
	
	private AdRepository adRepository;

	public AdService(AdRepository adRepository) {
		this.adRepository = adRepository;
	}

	Ad addAd(Ad ad) {
		// here you can do some validations etc before saving the user
		return adRepository.save(ad);
	}
	
	List<Ad> filterAd (AdHelper adHelper){
		return adRepository.findAll()
		.stream()
		.filter(ad -> colorMatch(ad, adHelper))
		.filter(ad -> discMatch(ad, adHelper))
		.filter(ad -> trackMatch(ad, adHelper))
		.filter(ad -> typeMatch(ad, adHelper))
		.collect(Collectors.toList());
		
	}
	public boolean colorMatch(Ad ad, AdHelper adHelper){
		if (adHelper.getColor() == null || adHelper.getColor().equals("")){
			return true;
		} else {
			return ad.getColor().toLowerCase().equals(adHelper.getColor().toLowerCase());
		}
	}
	
	public boolean discMatch(Ad ad, AdHelper adHelper){
		if (adHelper.getDisc() == null || adHelper.getDisc().equals("")){
			return true;
		} else {
			return ad.getDisc().toLowerCase().equals(adHelper.getDisc().toLowerCase()) 
					|| ad.getDisc().toLowerCase().contains(adHelper.getDisc().toLowerCase());
		}
	}
	
	public boolean trackMatch(Ad ad, AdHelper adHelper){
		if (adHelper.getTrack() == null || adHelper.getTrack().equals("")){
			return true;
		} else {
			return ad.getTrack().toLowerCase().equals(adHelper.getTrack().toLowerCase()) 
					|| ad.getTrack().toLowerCase().contains(adHelper.getTrack().toLowerCase());
		}
	}
	
	public boolean typeMatch(Ad ad, AdHelper adHelper){
		if (adHelper.getType() == null || adHelper.getType().equals("")){
			return true;
		} else {
			return ad.getType().toLowerCase().equals(adHelper.getType().toLowerCase());
		}
	}

	List<Ad> getAllAds() {
		return adRepository.findAll();
	}
/*
	Ad getAdById(long adId) {
		return adRepository.findOne(adId);
	}*/
	
	List<Ad> getAdByType(String type) {
		return adRepository.findByType(type);
	}
	public void setFileForAd(long id, String file){
		Ad ad = adRepository.findOne(id);
		String newFilePath = ".." + file.substring(56);
		ad.setFile(newFilePath);
		adRepository.save(ad);
	}
	
	public void setTrackFileForAd(long id, String trackFile){
		Ad ad = adRepository.findOne(id);
		String newFilePath = ".." + trackFile.substring(56);
		ad.setTrackFile(newFilePath);
		adRepository.save(ad);
	}
}
