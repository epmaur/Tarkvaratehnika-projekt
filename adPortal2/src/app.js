import {inject} from 'aurelia-framework';
import {FetchConfig} from 'aurelia-auth';


@inject(FetchConfig)
export class App {
    
    constructor(fetchConfig){
      this.fetchConfig = fetchConfig;
    }
    
    
    configureRouter(config, router) {
        this.router = router;
        this.fetchConfig.configure();
        config.title = 'DiscSeeker';

        config.map([
          { route: ['', 'home'],       name: 'home',       moduleId: 'home/index' },
          { route: 'kaotatud_kettad', name: 'kaotatud_kettad',  moduleId: './kaotatud_kettad/kaotatud_kettad',   nav: true },
          { route: 'leitud_kettad', name: 'leitud_kettad',  moduleId: './leitud_kettad/leitud_kettad',   nav: true },
          { route: 'minu_kuulutused', name: 'minu_kuulutused',  moduleId: './minu_kuulutused/minu_kuulutused',   nav: true },
          { route: 'uus_kuulutus', name: 'uus_kuulutus',  moduleId: './uus_kuulutus/uus_kuulutus',   nav: true },
          { route: 'rajakaardi_redigeerimine', name: 'rajakaardi_redigeerimine', moduleId: './rajakaardi_redigeerimine/rajakaardi_redigeerimine',  nav: true },
          { route: 'vaata_rajakaarti', name: 'vaata_rajakaarti',  moduleId: './vaata_rajakaarti/vaata_rajakaarti',   nav: true },
          { route: 'sign_in', name: 'sign_in',  moduleId: './sign_in/sign_in',   nav: true }
        ]);
    }
}
