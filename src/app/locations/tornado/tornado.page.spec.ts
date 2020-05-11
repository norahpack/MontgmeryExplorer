import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TornadoPage } from './tornado.page';

describe('TornadoPage', () => {
  let component: TornadoPage;
  let fixture: ComponentFixture<TornadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TornadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TornadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
