import {HttpClient, json} from 'aurelia-fetch-client'

export class leitud_kettad{
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
}

