package ttu.tteh.ad;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;

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
	String addingDate;
	
	@JsonProperty
	String trackFile;
	
	@JsonProperty
	String file;
	
	@Column(name = "trackPictureURL", length = 65536)
	String trackPictureURL;
	
	
	public Ad(String disc, String type, String content, String track, String color, String file, String trackFile, String trackPictureURL) {
		super();
		this.disc = disc;
		this.type = type;
		this.content = content;
		this.track = track;
		this.color = color;
		this.file = file;
		this.trackFile = trackFile;
		this.trackPictureURL = trackPictureURL;
		
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
	
	
	@Column(name = "trackPictureURL", length = 65536)
	public String getTrackPictureURL() {
		return trackPictureURL;
	}
	@Column(name = "trackPictureURL", length = 65536)
	public void setTrackPictureURL(String trackPictureURL) {
		this.trackPictureURL = trackPictureURL;
	}


	@JsonIgnore
	public void setFile(String file){
		this.file=file;
	}
	
	public String getAddingDate() {
		return addingDate;
	}


	public void setAddingDate(String addingDate) {
		this.addingDate = addingDate;
	}


	@JsonProperty(access = JsonProperty.Access.READ_ONLY)
	public String getFile() {
		if (file == null) {
			file = "pildid/pilti_pole.jpg";
		}
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
