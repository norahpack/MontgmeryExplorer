import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GatewayPage } from './gateway.page';

describe('GatewayPage', () => {
  let component: GatewayPage;
  let fixture: ComponentFixture<GatewayPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GatewayPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GatewayPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
