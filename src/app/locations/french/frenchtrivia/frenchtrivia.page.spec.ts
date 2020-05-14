import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FrenchtriviaPage } from './frenchtrivia.page';

describe('FrenchtriviaPage', () => {
  let component: FrenchtriviaPage;
  let fixture: ComponentFixture<FrenchtriviaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrenchtriviaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FrenchtriviaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
