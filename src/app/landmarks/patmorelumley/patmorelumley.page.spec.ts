import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PatmorelumleyPage } from './patmorelumley.page';

describe('PatmorelumleyPage', () => {
  let component: PatmorelumleyPage;
  let fixture: ComponentFixture<PatmorelumleyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatmorelumleyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PatmorelumleyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
