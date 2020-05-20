import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NeuillytriviaPage } from './neuillytrivia.page';

describe('NeuillytriviaPage', () => {
  let component: NeuillytriviaPage;
  let fixture: ComponentFixture<NeuillytriviaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeuillytriviaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NeuillytriviaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
