import {HttpClient, json} from 'aurelia-fetch-client'

export class uus_kuulutus{
    adData = {}
/*
	constructor() {
		this.appName = "adPortal"
		this.count = 0
	}*/

	addAd() {
		let client = new HttpClient();
		client.fetch('http://localhost:8080/ads/add', {
			'method': "POST",
			'body': json(this.adData)
		})
			.then(response => response.json())
			.then(data => {
				console.log("Server saatis " + data.title);
		});

		console.log("Method executed!")
	}
}