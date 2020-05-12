import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HopewellmontgomeryPage } from './hopewellmontgomery.page';

describe('HopewellmontgomeryPage', () => {
  let component: HopewellmontgomeryPage;
  let fixture: ComponentFixture<HopewellmontgomeryPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HopewellmontgomeryPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HopewellmontgomeryPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
