import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RecoverytriviaPage } from './recoverytrivia.page';

describe('RecoverytriviaPage', () => {
  let component: RecoverytriviaPage;
  let fixture: ComponentFixture<RecoverytriviaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecoverytriviaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RecoverytriviaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
