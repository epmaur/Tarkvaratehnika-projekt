import {HttpClient, json} from 'aurelia-fetch-client'

export class leitud_kettad{

    activate() {
        this.ads = []
        let client = new HttpClient();
        client.fetch('http://localhost:8080/ads/leidsin')
			.then(response => response.json())
			.then(ads => this.ads = ads);

		};

    }
/*
activate() {
        this.ads = []
        let client = new HttpClient();
        client.fetch('http://localhost:8080/ads')
			.then(response => response.json())
			.then(ads => this.ads = ads);

		};

    
	userData = {}

	constructor() {
		this.appName = "adPortal"
		this.count = 0
	}

	showUsers() {
		let client = new HttpClient();

		client.fetch('http://localhost:8080/ads')
			.then(response => response.json())
			.then(data => {
				console.log("Server saatis " + toString(data));
		});

		console.log("Method executed!")
	}
}*/