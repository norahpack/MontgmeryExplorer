import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landmarks',
  templateUrl: './landmarks.page.html',
  styleUrls: ['./landmarks.page.scss'],
})
export class LandmarksPage implements OnInit {
private selectedItem: any;
  private icons = [
    'help-circle-outline',
    'pin-outline',
    'pin-outline',
    'pin-outline',
    'pin-outline',
    'pin-outline',
    'pin-outline',
    'pin-outline',
    'pin-outline',
    'pin-outline',
    'pin-outline',
    'pin-outline',
    'pin-outline',
    'pin-outline',
    'pin-outline',
    'pin-outline',
    'pin-outline',
    'pin-outline',
    'pin-outline',
    'pin-outline',
    'pin-outline',
    'pin-outline',
    'pin-outline',
    'pin-outline',
    'pin-outline',
    'pin-outline',
    'pin-outline',
    'pin-outline',
    'pin-outline',
    'pin-outline',
    'pin-outline',
    'pin-outline',
    'pin-outline',
    'pin-outline'
  ];
  private routing = [
    "/about",
    '/arstingstallmay',
    '/jamesayers',
    '/bell',
    '/blairbarker',
    '/cameronfeinthel',
    '/craineberhard',
    '/jonathancrain',
    '/crainconklin',
    '/crist',
    '/formervillage',
    '/groverkjellenberg',
    '/hoffman',
    '/hopewell',
    '/hopewellmontgomery',
    '/johnsonmurdough',
    '/mason',
    '/millshellman',
    '/parrottsmith',
    '/patmorelumley',
    '/pioneer',
    '/pureoil',
    '/sage',
    '/smethurst',
    '/snider',
    '/snidercrain',
    '/stixdurbrow',
    '/taulman',
    '/universalist',
    '/weller',
    '/wilderswaim',
    '/wooleykelsch',
    '/yost',
    '/sherrittrees'
  ];
  private names =[
  "About Montgomery's Historic Landmarks",
  "Arstingstall-May House, c. 1907",
  "James Ayers House, c. 1820",
  "Bell House, c. 1825",
  "Blair-Barker House, c. 1875",
  "Cameron-Feinthel House, c. 1891",
  "Crain-Eberhard House, c. 1884",
  "Jonathan Crain House, c. 1884",
  "Crain-Conklin House, c. 1820",
  "Crist House, c. 1815",
  "Former Village Hall, c. 1925",
  "Grover-Kjellenberg House, c. 1840",
  "Hoffman House, c. 1870",
  "Hopewell Cemetery, c. 1803",
  "Hopewell-Montgomery Presbyterian Church, c. 1829",
  "Johnson-Murdough Building, c. 1890",
  "Mason House, c. 1861",
  "Mills-Hellman House, c. 1839-1847",
  "Parrott-Smith House, c. 1897",
  "Patmore-Lumley House, c. 1810",
  "Pioneer Building, c. 1818-1819",
  "Pure Oil Station, c. 1931",
  "Sage Tavern, c. 1818-1819",
  "Smethurst House, c. 1869",
  "Snider House, c. 1870",
  "Snider-Crain House, c. 1818",
  "Stix-Durbrow House, c. 1928",
  "Taulman House, c. 1830",
  "Universalist Church, c. 1837",
  "Weller House, c. 1807",
  "Wilder-Swaim House, c. 1820",
  "Wooley-Kelsch House, c. 1890",
  "Yost Tavern, c. 1805", 
  "Sherritt-Rees House, c. 1813"
  ]
  public items: Array<{ title: string; routerLink: string; icon: string }> = [];
  constructor() {
    for (let i = 1; i < 35; i++) {
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
  //   this.router.navigate(['/landmarks', JSON.stringify(item)]);
  // }
}
