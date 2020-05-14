import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FlowertriviaPage } from './flowertrivia.page';

describe('FlowertriviaPage', () => {
  let component: FlowertriviaPage;
  let fixture: ComponentFixture<FlowertriviaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowertriviaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FlowertriviaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
