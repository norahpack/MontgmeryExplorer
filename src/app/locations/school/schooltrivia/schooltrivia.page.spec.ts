import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchooltriviaPage } from './schooltrivia.page';

describe('SchooltriviaPage', () => {
  let component: SchooltriviaPage;
  let fixture: ComponentFixture<SchooltriviaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchooltriviaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchooltriviaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
