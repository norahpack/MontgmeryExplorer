import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParrotttriviaPage } from './parrotttrivia.page';

describe('ParrotttriviaPage', () => {
  let component: ParrotttriviaPage;
  let fixture: ComponentFixture<ParrotttriviaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParrotttriviaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParrotttriviaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
