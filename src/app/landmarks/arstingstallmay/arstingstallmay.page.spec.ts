import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArstingstallmayPage } from './arstingstallmay.page';

describe('ArstingstallmayPage', () => {
  let component: ArstingstallmayPage;
  let fixture: ComponentFixture<ArstingstallmayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArstingstallmayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArstingstallmayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
