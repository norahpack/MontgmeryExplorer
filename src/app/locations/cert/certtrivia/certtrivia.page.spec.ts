import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CerttriviaPage } from './certtrivia.page';

describe('CerttriviaPage', () => {
  let component: CerttriviaPage;
  let fixture: ComponentFixture<CerttriviaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CerttriviaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CerttriviaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
