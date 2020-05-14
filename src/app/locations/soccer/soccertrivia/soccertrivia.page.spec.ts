import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SoccertriviaPage } from './soccertrivia.page';

describe('SoccertriviaPage', () => {
  let component: SoccertriviaPage;
  let fixture: ComponentFixture<SoccertriviaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoccertriviaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SoccertriviaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
