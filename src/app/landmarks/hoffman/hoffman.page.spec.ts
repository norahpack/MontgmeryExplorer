import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HoffmanPage } from './hoffman.page';

describe('HoffmanPage', () => {
  let component: HoffmanPage;
  let fixture: ComponentFixture<HoffmanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoffmanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HoffmanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
