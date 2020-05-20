import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AerialPage } from './aerial.page';

describe('AerialPage', () => {
  let component: AerialPage;
  let fixture: ComponentFixture<AerialPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AerialPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AerialPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
