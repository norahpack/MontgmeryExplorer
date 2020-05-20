import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CartriviaPage } from './cartrivia.page';

describe('CartriviaPage', () => {
  let component: CartriviaPage;
  let fixture: ComponentFixture<CartriviaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartriviaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CartriviaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
