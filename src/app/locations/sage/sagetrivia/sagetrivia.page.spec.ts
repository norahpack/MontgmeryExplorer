import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SagetriviaPage } from './sagetrivia.page';

describe('SagetriviaPage', () => {
  let component: SagetriviaPage;
  let fixture: ComponentFixture<SagetriviaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SagetriviaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SagetriviaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
