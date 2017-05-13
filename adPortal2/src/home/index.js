import {HttpClient, json} from 'aurelia-fetch-client'
import {inject} from 'aurelia-framework'
import {Router} from 'aurelia-router'
import {AuthService} from 'aurelia-auth';




@inject(Router)
//@inject(AuthService)
export class Home {
    constructor(router){
		this.router = router;
	}
    /*
    constructor(auth){
        this.auth = auth;
    };*/
    

    
    activate() {
        this.ads = []
        let client = new HttpClient();
        client.fetch('http://localhost:8080/ads/')
			.then(response => response.json())
			.then(ads => this.ads = ads);
        
        
		};
    
    lookAtMap(trackName, trackPictureURL) {
        let vaata_rajakaarti = this.router.routes.find(x => x.name === 'vaata_rajakaarti');
		vaata_rajakaarti.msg = trackName + '%NING%' + trackPictureURL + '%NING2%' + "home";
		this.router.navigateToRoute('vaata_rajakaarti');
    }
    
    log() {
        console.log(this.auth.getMe());
    }
    
    
    
}