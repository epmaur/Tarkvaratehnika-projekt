import {HttpClient, json} from 'aurelia-fetch-client'
import {inject} from 'aurelia-framework'
import {Router} from 'aurelia-router'

@inject(Router)
export class minu_kuulutused{
    
    constructor(router){
		this.router = router;
	}
    
    activate() {
        this.ads = []
        let client = new HttpClient();
        client.fetch('http://localhost:8080/ads/')
			.then(response => response.json())
			.then(ads => this.ads = ads);
		};
    
    deleteAd(id) {
        let client = new HttpClient();
		client.fetch('http://localhost:8080/ads/delete', {
			'method': "POST",
			'body': json(id)
		})
			.then(response => response.json())
			.then(data => {
				console.log("Server saatis " + data);
            
		});
        this.router.navigateToRoute(
          this.router.currentInstruction.config.name,
          this.router.currentInstruction.params,
          { replace: true }
        );
        
    };
        
        
}