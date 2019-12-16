import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GooglePlus } from '@ionic-native/google-plus/ngx';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook/ngx';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  accessToken: any;
displayName:any;
email:any;
expires: any;
expires_in: any;
familyName: any;
givenName: any;
imageUrl: any;
userId: any;
isLoggedIn:boolean = false;
isfbLoggedIn:boolean = false;
// accessToken: "EAAGjO97nqicBABnIjEbqLs9MZCmeT9YqzDOxtuirDYZCnZAF3ZBNLEueho2Dxpj2PQysPSZCN73X2d1D7vRwmYZCmVHrx2x3nhJSYW5Onwuw41ez7S9PDJIoGkDmdRj3uc3y9u6AXRZCgWRwZCvl9hZCni38feVxN5rFxTnqdPNGcc6HXqnPUwBMGULv8TN5SOxdvsDFaWqzU1EOB67D0M06MkbRYN2psWZBIZD"
expiresIn: any;
session_key:boolean;
sig: any;
userID: any;


  constructor(public navCtrl: NavController, private googlePlus: GooglePlus ,private fb: Facebook
   ) {
      }
  doGoogleLogin() {
    console.log('Device is ready!');
    this.googlePlus.login({
    }).then( res => {
      console.log(res);
      this.displayName = res.displayName;
      this.email = res.email;
      this.familyName = res.familyName;
      this.givenName = res.givenName;
      this.userId = res.userId;
      this.imageUrl = res.imageUrl;

      this.isLoggedIn = true;
    })
      .catch(err => console.log(err));
     
     
  }
  logout(){
    
    this.googlePlus.logout().then(res => {
      console.log(res);
      this.displayName = "";
      this.email = "";
      this.familyName = "";
      this.givenName = "";
      this.userId = "";
      this.imageUrl = "";

      this.isLoggedIn = false;
    })
    .catch(err => console.log(err));

  }
  fbLogin() {
    this.fb.login(['public_profile', 'user_friends', 'email'])
      .then((res)  => {
        console.log(res);
        this.isfbLoggedIn = true;
        // if (res.status === 'connected') {
        //  
        //   console.log(res);
        //   } 
      })
      .catch(e => console.log('Error logging into Facebook', e));
  }

  fblogout() {
    this.fb.logout()
      .then(res => {
        console.log(res);
       this.isfbLoggedIn = false})
      .catch(e => console.log('Error logout from Facebook', e));
  }
  
}
