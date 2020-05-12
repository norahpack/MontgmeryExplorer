import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WellerPage } from './weller.page';

describe('WellerPage', () => {
  let component: WellerPage;
  let fixture: ComponentFixture<WellerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WellerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WellerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
