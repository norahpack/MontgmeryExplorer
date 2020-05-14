import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { July4triviaPage } from './july4trivia.page';

describe('July4triviaPage', () => {
  let component: July4triviaPage;
  let fixture: ComponentFixture<July4triviaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ July4triviaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(July4triviaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
