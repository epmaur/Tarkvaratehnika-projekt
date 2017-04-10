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
	private AdHelper adHelperNull;
	private AdHelper adHelperEmpty;
	
	@Before
	public void initObjects() {
		adService = new AdService(adRepository);
		ad = new Ad("Innova Destroyer", "leitud", "kaotasin ketta", "Elva discgolfirada", "Roheline");
		adHelperCorrect = new AdHelper("Innova Destroyer", "Elva discgolfirada", "Roheline", "leitud");
		adHelperCase = new AdHelper("inNOva Destroyer", "elVa discgOlfiRada", "rohELine", "LEITUD");
		adHelperContains = new AdHelper("Innova", "Elva", "roheline", "leitud");
		adHelperIncorrect = new AdHelper("Mamba", "Nõmme discgolfirada", "roosa", "kaotatud");
		adHelperNull = new AdHelper(null, null, null, null);
		adHelperEmpty = new AdHelper("", "", "", "");
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
	public void testDiscNull() {
		assertEquals(true, adService.discMatch(ad, adHelperNull));
	}
	
	@Test
	public void testDiscEmpty() {
		assertEquals(true, adService.discMatch(ad, adHelperEmpty));
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
	public void testTrackNull() {
		assertEquals(true, adService.trackMatch(ad, adHelperNull));
	}
	
	@Test
	public void testTrackEmpty() {
		assertEquals(true, adService.trackMatch(ad, adHelperEmpty));
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
	public void testColorNull() {
		assertEquals(true, adService.colorMatch(ad, adHelperNull));
	}
	
	@Test
	public void testColorEmpty() {
		assertEquals(true, adService.colorMatch(ad, adHelperEmpty));
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
	
	@Test
	public void testTypeNull() {
		assertEquals(true, adService.typeMatch(ad, adHelperNull));
	}
	
	@Test
	public void testTypeEmpty() {
		assertEquals(true, adService.typeMatch(ad, adHelperEmpty));
	}

}
