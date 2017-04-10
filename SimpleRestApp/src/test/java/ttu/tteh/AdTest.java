package ttu.tteh;

import static org.junit.Assert.assertEquals;

import org.junit.Before;
import org.junit.Test;

import ttu.tteh.ad.Ad;
import ttu.tteh.ad.AdHelper;
import ttu.tteh.ad.AdRepository;
import ttu.tteh.ad.AdService;

public class AdTest {
    private AdRepository adRepository;
	private AdService adService;
	private Ad ad;
	private AdHelper adHelperCorrect;
	private AdHelper adHelperCase;
	private AdHelper adHelperContains;
	private AdHelper adHelperIncorrect;
	
	@Before
	public void initObjects() {
		adService = new AdService(adRepository);
		ad = new Ad("Innova Destroyer", "leitud", "kaotasin ketta", "Elva discgolfirada", "Roheline");
		adHelperCorrect = new AdHelper("Innova Destroyer", "Elva discgolfirada", "Roheline", "leitud");
		adHelperCase = new AdHelper("inNOva Destroyer", "elVa discgOlfiRada", "rohELine", "LEITUD");
		adHelperContains = new AdHelper("Innova", "Elva", "roheline", "leitud");
		adHelperIncorrect = new AdHelper("Mamba", "Nõmme discgolfirada", "roosa", "kaotatud");
	}
	
	@Test
	public void testDiscCorrect() {
		assertEquals(true, adService.discMatch(ad, adHelperCorrect));
	}
	
	@Test
	public void testDiscCase() {
		assertEquals(true, adService.discMatch(ad, adHelperCase));
	}
	
	@Test
	public void testDiscContains() {
		assertEquals(true, adService.discMatch(ad, adHelperContains));
	}
	
	@Test
	public void testDiscIncorrect() {
		assertEquals(false, adService.discMatch(ad, adHelperIncorrect));
	}
	
	@Test
	public void testTrackCorrect() {
		assertEquals(true, adService.trackMatch(ad, adHelperCorrect));
	}
	
	@Test
	public void testTrackCase() {
		assertEquals(true, adService.trackMatch(ad, adHelperCase));
	}
	
	@Test
	public void testTrackContains() {
		assertEquals(true, adService.trackMatch(ad, adHelperContains));
	}
	
	@Test
	public void testTrackIncorrect() {
		assertEquals(false, adService.trackMatch(ad, adHelperIncorrect));
	}
	
	@Test
	public void testColorCorrect() {
		assertEquals(true, adService.colorMatch(ad, adHelperCorrect));
	}
	
	@Test
	public void testColorCase() {
		assertEquals(true, adService.colorMatch(ad, adHelperCase));
	}
	
	@Test
	public void testColorIncorrect() {
		assertEquals(false, adService.colorMatch(ad, adHelperIncorrect));
	}
	
	@Test
	public void testTypeCorrect() {
		assertEquals(true, adService.typeMatch(ad, adHelperCorrect));
	}
	
	@Test
	public void testTypeCase() {
		assertEquals(true, adService.typeMatch(ad, adHelperCase));
	}
	@Test
	public void testTypeIncorrect() {
		assertEquals(false, adService.typeMatch(ad, adHelperIncorrect));
	}

}
