import {HttpClient, json} from 'aurelia-fetch-client'

export class uus_kuulutus{
    
    adData = {}
	tracks = ['Elva discgolfirada', 'Nõmme discgolfirada'];
    types = ['kaotatud', 'leitud'];
    selectedTrack= '';

	addAd() {
		let client = new HttpClient();
		client.fetch('http://localhost:8080/ads/add', {
			'method': "POST",
			'body': json(this.adData)
		})
			.then(response => response.json())
			.then(data => {
				console.log("Server saatis " + data.track);
		});

		console.log("Method executed!")
	}
}
