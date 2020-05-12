import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HopewellPage } from './hopewell.page';

describe('HopewellPage', () => {
  let component: HopewellPage;
  let fixture: ComponentFixture<HopewellPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HopewellPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HopewellPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
