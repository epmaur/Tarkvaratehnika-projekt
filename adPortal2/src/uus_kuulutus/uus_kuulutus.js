import {HttpClient, json} from 'aurelia-fetch-client'
import {inject} from 'aurelia-framework'
import {Router} from 'aurelia-router'
import {computedFrom} from 'aurelia-framework';

@inject(Router)
export class uus_kuulutus{
	constructor(router){
		this.router = router;
	}
    adData = {};
    //dataURL;
    activate(params, routeData) {
        if (routeData.msg != 'uus_kuulutus') {
            //console.log(routeData.name);
            this.adData.trackPictureURL = routeData.msg;
            //console.log(this.adData.trackPictureURL);
        }
    }
    
	tracks = ['Alatskivi', 'Elva discgolfirada', 'Nõmme discgolfirada'];
    tracksWithMaps=['Alatskivi']
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
        
            if (data.file != 'pildid/pilti_pole.jpg') {
                this.uploadFile(data.id);
            }
            this.router.navigateToRoute('minu_kuulutused');
		});
        
		console.log("Method executed!")
	}

	choosePic(){
		console.log(this.adData.track);
		let rajakaardi_redigeerimine = this.router.routes.find(x => x.name === 'rajakaardi_redigeerimine');
		rajakaardi_redigeerimine.msg = this.adData.track;
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
			
    }

    @computedFrom('adData.disc', 'adData.color', 'adData.content')
    get IsSubmittable() {
        let adData = this.adData;

        return (adData.disc && adData.color && adData.content);
    }

    isRedigatable(track) {
        //let tracksWithMaps = this.tracksWithMaps;
        console.log(this.track)
        console.log(this.tracksWithMaps)
        console.log(this.tracksWithMaps.indexOf(this.track)> -1)
        return this.tracksWithMaps.indexOf(this.selectedTrack) > -1;
    }

}
