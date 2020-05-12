import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WilderswaimPage } from './wilderswaim.page';

describe('WilderswaimPage', () => {
  let component: WilderswaimPage;
  let fixture: ComponentFixture<WilderswaimPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WilderswaimPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WilderswaimPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
