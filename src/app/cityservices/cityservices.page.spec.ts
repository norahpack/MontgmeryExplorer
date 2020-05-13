import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CityservicesPage } from './cityservices.page';

describe('CityservicesPage', () => {
  let component: CityservicesPage;
  let fixture: ComponentFixture<CityservicesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityservicesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CityservicesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
