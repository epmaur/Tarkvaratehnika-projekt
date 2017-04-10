package ttu.tteh.map;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;







@RestController
public class MapController {
    private MapService mapService;
    
    public MapController(MapService mapService) {
        this.mapService = mapService;
    }
    
    @RequestMapping(value="/maps/map", method=RequestMethod.POST,
			consumes = "application/json")
	public Map addMap(@RequestBody Map map) {
		return mapService.addMap(map);
	}
    
	@RequestMapping(value="/maps", method=RequestMethod.GET)
	public List<Map> getAllMaps() {
		return mapService.getAllMaps();
	}
  
    
    @RequestMapping(value= "/maps/{mapLink}", method=RequestMethod.GET)
	public Map getMapByMapLink(@PathVariable("mapLink")String mapLink) {
		return mapService.getMapByMapLink(mapLink);
	}

   /* @RequestMapping(value="/maps/{map}", method=RequestMethod.GET)
    public List<Map> getMapByMap(@PathVariable("map") String map) {
        return mapService.getMapByMap(map);
    }*/
}


