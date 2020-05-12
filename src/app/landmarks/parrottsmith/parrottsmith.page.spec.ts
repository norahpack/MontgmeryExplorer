import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParrottsmithPage } from './parrottsmith.page';

describe('ParrottsmithPage', () => {
  let component: ParrottsmithPage;
  let fixture: ComponentFixture<ParrottsmithPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParrottsmithPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParrottsmithPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
