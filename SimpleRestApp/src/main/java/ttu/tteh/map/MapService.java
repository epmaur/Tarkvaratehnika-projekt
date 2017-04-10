package ttu.tteh.map;

import java.util.List;

import org.springframework.stereotype.Service;


@Service
public class MapService {
	
    private MapRepository mapRepository;

    public MapService(MapRepository mapRepository) {
        this.mapRepository = mapRepository;
    }
	Map addMap(Map map) {
		// here you can do some validations etc before saving the user
		return mapRepository.save(map);
	}

	List<Map> getAllMaps() {
		return mapRepository.findAll();
	}
  
    public Map getMapByMapLink(String mapLink){
		return mapRepository.findByMapLink(mapLink);
	} 
   
    List<Map> getMapByMap(String map){
        return mapRepository.findByMap(map);
    }
}