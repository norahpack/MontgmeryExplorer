import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeadershiptriviaPage } from './leadershiptrivia.page';

describe('LeadershiptriviaPage', () => {
  let component: LeadershiptriviaPage;
  let fixture: ComponentFixture<LeadershiptriviaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadershiptriviaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeadershiptriviaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
