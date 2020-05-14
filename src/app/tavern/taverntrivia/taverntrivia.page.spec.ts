import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaverntriviaPage } from './taverntrivia.page';

describe('TaverntriviaPage', () => {
  let component: TaverntriviaPage;
  let fixture: ComponentFixture<TaverntriviaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaverntriviaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaverntriviaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
