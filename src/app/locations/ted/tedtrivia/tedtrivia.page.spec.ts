import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TedtriviaPage } from './tedtrivia.page';

describe('TedtriviaPage', () => {
  let component: TedtriviaPage;
  let fixture: ComponentFixture<TedtriviaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TedtriviaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TedtriviaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
