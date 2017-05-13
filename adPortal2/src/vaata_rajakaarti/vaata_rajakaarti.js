import {HttpClient, json} from 'aurelia-fetch-client'
import {inject} from 'aurelia-framework'
import {Router} from 'aurelia-router'

@inject(Router)
export class vaata_rajakaarti {
    track;
    trackPictureURL;
    previousView;
    
    constructor(router){
		this.router = router;
	}
    
    activate(params, routeData) {
        var indexOfSeparator1 = routeData.msg.indexOf("%NING%");
        var indexOfSeparator2 = routeData.msg.indexOf("%NING2%");
        this.track = routeData.msg.substring(0,indexOfSeparator1);
        this.trackPictureURL = routeData.msg.substring(indexOfSeparator1 + 6, indexOfSeparator2);
        this.previousView = routeData.msg.substring(indexOfSeparator2 + 7);
        console.log(this.track);
        console.log(this.trackPictureURL);
        console.log(this.previousView);
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
    
    goToPreviousView() {
        this.router.navigateToRoute(this.previousView);
    }
    
}