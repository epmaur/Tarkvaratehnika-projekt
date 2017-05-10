import {HttpClient, json} from 'aurelia-fetch-client'
import {inject} from 'aurelia-framework'
import {Router} from 'aurelia-router'

@inject(Router)
export class vaata_rajakaarti {
    track;
    trackPictureURL;
    
    constructor(router){
		this.router = router;
	}
    
    activate(params, routeData) {
        var indexOfSeparator = routeData.name.indexOf("%NING%");
        this.track = routeData.name.substring(0,indexOfSeparator);
        this.trackPictureURL = routeData.name.substring(indexOfSeparator + 6);
        console.log(this.track);
        console.log(this.trackPictureURL);
    }
    
    attached() {
        this.addPic()
    }
    
    addPic() {
		let client = new HttpClient();
		client.fetch('http://localhost:8080/maps/' + this.track) 
			.then(response => response.json())
			.then(data => this.maps = data);
            
        console.log(this.maps);
	};
    
}