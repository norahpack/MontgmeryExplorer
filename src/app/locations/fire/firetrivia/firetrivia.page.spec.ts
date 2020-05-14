import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FiretriviaPage } from './firetrivia.page';

describe('FiretriviaPage', () => {
  let component: FiretriviaPage;
  let fixture: ComponentFixture<FiretriviaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiretriviaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FiretriviaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
