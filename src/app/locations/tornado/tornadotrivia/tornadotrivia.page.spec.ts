import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TornadotriviaPage } from './tornadotrivia.page';

describe('TornadotriviaPage', () => {
  let component: TornadotriviaPage;
  let fixture: ComponentFixture<TornadotriviaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TornadotriviaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TornadotriviaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
