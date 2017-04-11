package ttu.tteh.ad;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonProperty.Access;

import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Setter
public class Ad {
	@Id
	@GeneratedValue
	long id;
	String disc;
	String type;
	String content;
	String track;
	String color;
	
	@JsonProperty
	String trackFile;
	
	@JsonProperty
	String file;
	
	
	public Ad(String disc, String type, String content, String track, String color, String file, String trackFile) {
		super();
		this.disc = disc;
		this.type = type;
		this.content = content;
		this.track = track;
		this.color = color;
		this.file = file;
		this.trackFile = trackFile;
	}


	public String getColor() {
		return color;
	}


	public void setColor(String color) {
		this.color = color;
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


	public String getDisc() {
		return disc;
	}


	public void setDisc(String disc) {
		this.disc = disc;
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
	
	@JsonIgnore
	public void setFile(String file){
		this.file=file;
	}
	
	@JsonProperty(access = JsonProperty.Access.READ_ONLY)
	public String getFile() {
		return file;
	}
	@JsonIgnore
	public void setTrackFile(String trackFile){
		this.trackFile=trackFile;
	}
	
	@JsonProperty(access = JsonProperty.Access.READ_ONLY)
	public String getTrackFile() {
		return trackFile;
	}
	
	
	
}
