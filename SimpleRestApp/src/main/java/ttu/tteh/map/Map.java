package ttu.tteh.map;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Map {
    @Id
    @GeneratedValue
    long id;
    String map;
    String mapLink;


    public Map(String map, String mapLink){
        super();
        this.map = map;
        this.mapLink = mapLink;
    }
    public Map(){
        super();
    }
	public long getId() {
		return id;
	}
	public void setId(long id) {
		this.id = id;
	}
	public String getMap() {
		return map;
	}
	public void setMap(String map) {
		this.map = map;
	}
	public String getMapLink() {
		return mapLink;
	}
	public void setMapLink(String mapLink) {
		this.mapLink = mapLink;
	}


    
}