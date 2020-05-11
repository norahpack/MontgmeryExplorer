import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrashPage } from './crash.page';

describe('CrashPage', () => {
  let component: CrashPage;
  let fixture: ComponentFixture<CrashPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrashPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
