import {HttpClient, json} from 'aurelia-fetch-client'
import {inject} from 'aurelia-framework'
import {Router} from 'aurelia-router'

@inject(Router)
export class uus_kuulutus{
	constructor(router){
		this.router = router;
	}
    adData = {};
    //dataURL;
    activate(params, routeData) {
        if (routeData.name != 'uus_kuulutus') {
            //console.log(routeData.name);
            this.adData.trackPictureURL = routeData.name;
            //console.log(this.adData.trackPictureURL);
        }
    }
    
	tracks = ['Alatskivi', 'Elva discgolfirada', 'Nõmme discgolfirada'];
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
				console.log("Server saatis " + data.trackPictureURL);
			this.uploadFile(data.id);
		});

		console.log("Method executed!")
	}
	choosePic(){
		console.log(this.adData.track);
		let rajakaardi_redigeerimine = this.router.routes.find(x => x.name === 'rajakaardi_redigeerimine');
		rajakaardi_redigeerimine.name = this.adData.track;
		this.router.navigateToRoute('rajakaardi_redigeerimine');
	}


	uploadFile(id) {
		let client = new HttpClient();
		let formData = new FormData();
		formData.append("uploadfile", this.adData.file[0]);
  		client.fetch('http://localhost:8080/ads/file/' + id, { 
     		method: 'POST', 
      		body: formData
    })
      		.then(response => response.json())
      		.then(data => console.log(data.message))
      		.catch(error => console.log(error));
			console.log(this.adData.file[0]);
    }
}
