import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JonathancrainPage } from './jonathancrain.page';

describe('JonathancrainPage', () => {
  let component: JonathancrainPage;
  let fixture: ComponentFixture<JonathancrainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JonathancrainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JonathancrainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
