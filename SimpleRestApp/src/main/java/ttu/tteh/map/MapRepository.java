package ttu.tteh.map;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface MapRepository extends CrudRepository<Map, Long>{
	@Override
	public List<Map> findAll();
	public Map findByMapLink(String mapLink);
	public Map findByMap(String map);

}