package ttu.tteh.ad;

import java.util.List;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AdRepository extends CrudRepository<Ad, Long>{
	
	//public List<Ad> findAll();
	public List<Ad> findByTypeOrderByAddingDateDesc(String type);
	public List<Ad> findAllByOrderByAddingDateDesc();

}
