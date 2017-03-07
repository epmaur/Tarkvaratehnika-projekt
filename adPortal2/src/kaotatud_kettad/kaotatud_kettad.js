import {HttpClient, json} from 'aurelia-fetch-client'

export class kaotatud_kettad{
    activate() {
        this.ads = []
        let client = new HttpClient();
        client.fetch('http://localhost:8080/ads/otsin')
			.then(response => response.json())
			.then(ads => this.ads = ads);

		};

}