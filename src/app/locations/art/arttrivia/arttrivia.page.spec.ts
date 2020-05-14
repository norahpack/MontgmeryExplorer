import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ArttriviaPage } from './arttrivia.page';

describe('ArttriviaPage', () => {
  let component: ArttriviaPage;
  let fixture: ComponentFixture<ArttriviaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArttriviaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ArttriviaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
