package ttu.tteh.ad;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Ad {
	@Id
	@GeneratedValue
	long id;
	String title;
	String type;
	String content;
	String track;
	
	
	public Ad(String title, String type, String content, String track) {
		super();
		this.title = title;
		this.type = type;
		this.content = content;
		this.track = track;
	}


	public Ad() {
		super();
	}


	public long getId() {
		return id;
	}


	public void setId(long id) {
		this.id = id;
	}


	public String getTitle() {
		return title;
	}


	public void setTitle(String title) {
		this.title = title;
	}


	public String getType() {
		return type;
	}


	public void setType(String type) {
		this.type = type;
	}


	public String getContent() {
		return content;
	}


	public void setContent(String content) {
		this.content = content;
	}


	public String getTrack() {
		return track;
	}


	public void setTrack(String track) {
		this.track = track;
	}
	
	
}
