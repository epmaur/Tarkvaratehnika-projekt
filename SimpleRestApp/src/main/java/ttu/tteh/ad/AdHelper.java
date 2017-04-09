package ttu.tteh.ad;

public class AdHelper {
	String disc;
    String track;
    String color;
    String type;
    
    public AdHelper() {
    	
    }

    public AdHelper(String disc, String track, String color) {
        this.disc = disc;
        this.track = track;
        this.color = color;
    }
    
   	public AdHelper(String disc, String track, String color, String type) {
		super();
		this.disc = disc;
		this.track = track;
		this.color = color;
		this.type = type;
	}
   	

	public String getType() {
		return type;
	}

	public String getDisc() {
		return disc;
	}
    public String getTrack() {
		return track;
	}
    public String getColor() {
		return color;
	}

}
