import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RaintriviaPage } from './raintrivia.page';

describe('RaintriviaPage', () => {
  let component: RaintriviaPage;
  let fixture: ComponentFixture<RaintriviaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RaintriviaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RaintriviaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
