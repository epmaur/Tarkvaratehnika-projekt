import {HttpClient, json} from 'aurelia-fetch-client'
import {inject} from 'aurelia-framework'
import {Router} from 'aurelia-router'

@inject(Router)
export class leitud_kettad{
    constructor(router){
		this.router = router;
	}
    filterData = {}
    ads = []
    types = ['leitud', 'kaotatud'];

    activate() {
        //this.ads = []
        let client = new HttpClient();
        client.fetch('http://localhost:8080/ads/leitud')
			.then(response => response.json())
			.then(ads => this.ads = ads);

    };
    
    
    filterAds() {
        //this.filteredAds= []
        
        let client = new HttpClient();
		client.fetch('http://localhost:8080/ads/params', {
			'method': "POST",
			'body': json(this.filterData)
		})
			.then(response => response.json())
			.then(data => this.ads = data);
            console.log("Ads filtered!")
		};

    lookAtMap(trackName, trackPictureURL) {
        let vaata_rajakaarti = this.router.routes.find(x => x.name === 'vaata_rajakaarti');
		vaata_rajakaarti.name = trackName + '%NING%' + trackPictureURL + '%NING2%' + "leitud_kettad";
		this.router.navigateToRoute('vaata_rajakaarti');
    }
}

