import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AlertController } from '@ionic/angular';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Timeline',
      url: '/list',
      icon: 'list'
    },
    {
    title: 'Landmarks',
    url: '/landmarks',
    icon: 'pin'

    },
    {
    title: 'Mayors',
    url: '/mayors',
    icon: 'person'
    },
    {
    title: 'Morgan\'s Raid',
    url: '/morgan',
    icon: 'compass-outline'
    },
    {
    title: 'Photo Album',
    url: '/photoalbum',
    icon:'camera-outline'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
