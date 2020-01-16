import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: 'list.page.html',
  styleUrls: ['list.page.scss']
})
export class ListPage implements OnInit {
  private selectedItem: any;
  private icons = [
    'sad',
    'outlet',
    'bug',
    'finger-print',
    'basketball',
    'paper-plane',
    'american-football',
    'boat',
    'bluetooth',
    'build'
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
  public items: Array<{ title: string; routerLink: string; icon: string }> = [];
  constructor() {
    for (let i = 1; i < 11; i++) {
      this.items.push({
        title: 'Location ' + i,
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
