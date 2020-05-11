import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MorganPage } from './morgan.page';

describe('MorganPage', () => {
  let component: MorganPage;
  let fixture: ComponentFixture<MorganPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MorganPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MorganPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
