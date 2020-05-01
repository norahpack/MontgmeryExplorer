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
    'school-outline'
  ];
  private routing = [
    "/first",
    '/second',
    '/third',
    '/fourth',
    '/third',
    '/second',
    '/first',
    '/second',
    '/first',
    '/second'
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
  "2003: New Montgomery Elementary School"


  ]
  public items: Array<{ title: string; routerLink: string; icon: string }> = [];
  constructor() {
    for (let i = 1; i < 11; i++) {
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
