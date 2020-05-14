import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GatewaytriviaPage } from './gatewaytrivia.page';

describe('GatewaytriviaPage', () => {
  let component: GatewaytriviaPage;
  let fixture: ComponentFixture<GatewaytriviaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GatewaytriviaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GatewaytriviaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
