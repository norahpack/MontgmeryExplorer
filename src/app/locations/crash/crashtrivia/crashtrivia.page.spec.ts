import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrashtriviaPage } from './crashtrivia.page';

describe('CrashtriviaPage', () => {
  let component: CrashtriviaPage;
  let fixture: ComponentFixture<CrashtriviaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrashtriviaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrashtriviaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
