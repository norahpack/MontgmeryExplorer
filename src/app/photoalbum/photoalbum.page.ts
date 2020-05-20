import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photoalbum',
  templateUrl: './photoalbum.page.html',
  styleUrls: ['./photoalbum.page.scss'],
})
export class PhotoalbumPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'cloud-outline',
    'business-outline',
    'reader-outline',
    'shield-checkmark-outline',
    'flower-outline',
    'school-outline',
    'people-outline'
  ];
  private routing = [
    "/aerial",
    '/downtow',
    '/cityhall',
    '/cityservices',
    '/parksandevents',
    '/schools',
    '/community'
  ];
  private names =[
  "Aerial Photos",
  "Downtown",
  "City Hall",
  "City Services",
  "Parks and Events",
  "Schools",
  "Community",
  "yeet"
  ];
  public items: Array<{ title: string; routerLink: string; icon: string }> = [];
  constructor() {
    for (let i = 1; i < 8; i++) {
      this.items.push({
        title: this.names[i-1],
        routerLink: this.routing[i-1],
        icon: this.icons[i-1] })
    }
  }


  ngOnInit() {
  }
    // add back when alpha.4 is out
  // navigate(item) {
  //   this.router.navigate(['/photoalbum', JSON.stringify(item)]);
  // }

}
