import {HttpClient, json} from 'aurelia-fetch-client'
import config from '../authConfig';
import {AuthService} from 'aurelia-auth';
import {inject} from 'aurelia-framework';

@inject(AuthService)
export class sign_in {
    userData={};

    constructor(auth){
        this.auth = auth;
    };

    heading = 'Login';

    email='';
    password='';
    login(){
        return this.auth.login(this.email, this.password)
        .then(response=>{
            this.email = this.userData.email;
            this.password = this.userData.password;
            console.log("success logged " + response);
        })
        .catch(err=>{
            console.log("login failure");
        });
    };

    authenticate(name){
        return this.auth.authenticate(name, false, null)
        .then((response)=>{
            console.log("auth response " + response);
        });
    }

    
    
}