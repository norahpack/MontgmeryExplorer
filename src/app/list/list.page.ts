import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'body-outline',
    'play-back-circle-outline',
    'fast-food-outline',
    'leaf-outline',
    'football-outline',
    'thunderstorm-outline',
    'construct-outline',
    'map-outline',
    'trail-sign-outline',
    'school-outline',
    'rose-outline',
    'brush-outline',
    'car-sport-outline',
    'airplane-outline',
    'clipboard-outline',
    'water-outline',
    'nutrition-outline',
    'flame-outline',
    'medkit-outline',
    'business-outline',
    'earth-outline',
    'flag-outline',
    'rainy-outline'
  ];
  private routing = [
    "/first",
    '/second',
    '/third',
    '/fourth',
    '/soccer',
    '/tornado',
    '/recovery',
    '/parrott',
    '/ted',
    '/school',
    '/flower',
    '/art',
    '/car',
    '/crash',
    '/leadership',
    '/neuilly',
    '/farmers',
    '/fire',
    '/cert',
    '/gateway',
    '/french',
    '/july4',
    '/rain'
  ];
  private names =[
  "1795-1995: From Settlers to a City",
  "1995: Bicentennial Celebration",
  "1996: City Preserves Sage Tavern",
  "1997: Weller Park Dedication",
  "1998: Sister Cities World Youth Soccer Exchange",
  "1999: Tornado",
  "2000: Recovery",
  "2001: Parrott Alley Dedication",
  "2002: Ted Gregory Lane",
  "2003: New Montgomery Elementary School",
  "2004: Cincinnati Flower Show",
  "2005: Montgomery Kiwanis Art Show",
  "2006: First Classic Car Show",
  "2007: 25th Anniversary of FBI Plane Crash",
  "2008: Montgomery Citizens' Leadership Academy",
  "2009: Neuilly-Plaisance Plaza Fountain Dedication",
  "2010: Montgomery Farmer's Market",
  "2011: Fire Department Recieves ISO 2 Rating",
  "2012: Community Emergency Response Team (CERT)",
  "2013: Montgomery Gateway Center East",
  "2014: French Delegation Visits Montgomery",
  "2015: July 4th Celebration in Neuilly-Plaisance, France",
  "2016: Rain Harvest System"
  ]
  public items: Array<{ title: string; routerLink: string; icon: string }> = [];
  constructor() {
    for (let i = 1; i < 24; i++) {
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
  //   this.router.navigate(['/list', JSON.stringify(item)]);
  // }
}
