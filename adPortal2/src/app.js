import {inject} from 'aurelia-framework';
import {FetchConfig} from 'aurelia-auth';
import {activationStrategy} from 'aurelia-router';


@inject(FetchConfig)
@inject(activationStrategy)
export class App {
    
    constructor(fetchConfig){
      this.fetchConfig = fetchConfig;
    }
    
    
    configureRouter(config, router) {
        this.router = router;
        this.fetchConfig.configure();
        config.title = 'DiscSeeker';

        config.map([
          { route: ['', 'home'],       name: 'home',       moduleId: 'home/index', activationStrategy: activationStrategy.invokeLifecycle},
          { route: 'kaotatud_kettad', name: 'kaotatud_kettad',  moduleId: './kaotatud_kettad/kaotatud_kettad',   nav: true, activationStrategy: activationStrategy.invokeLifecycle},
          { route: 'leitud_kettad', name: 'leitud_kettad',  moduleId: './leitud_kettad/leitud_kettad',   nav: true},
          { route: 'minu_kuulutused', msg: '', name: 'minu_kuulutused',  moduleId: './minu_kuulutused/minu_kuulutused',   nav: true, activationStrategy: activationStrategy.invokeLifecycle },
          { route: 'uus_kuulutus', name: 'uus_kuulutus',  moduleId: './uus_kuulutus/uus_kuulutus',   nav: true, activationStrategy: activationStrategy.invokeLifecycle},
          { route: 'rajakaardi_redigeerimine', msg: '', name: 'rajakaardi_redigeerimine', moduleId: './rajakaardi_redigeerimine/rajakaardi_redigeerimine',  nav: true, activationStrategy: activationStrategy.invokeLifecycle},
          { route: 'vaata_rajakaarti', msg: '' , name: 'vaata_rajakaarti',  moduleId: './vaata_rajakaarti/vaata_rajakaarti',   nav: true, activationStrategy: activationStrategy.invokeLifecycle},
          { route: 'sign_in', name: 'sign_in',  moduleId: './sign_in/sign_in',   nav: true, activationStrategy: activationStrategy.invokeLifecycle }
        ]);
    }
}
