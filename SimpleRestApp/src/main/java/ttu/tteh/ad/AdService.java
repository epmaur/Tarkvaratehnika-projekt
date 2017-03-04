package ttu.tteh.ad;

import java.util.List;

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

	List<Ad> getAllAds() {
		return adRepository.findAll();
	}

	Ad getAdById(long adId) {
		return adRepository.findOne(adId);
	}
}
