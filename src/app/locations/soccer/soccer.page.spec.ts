import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SoccerPage } from './soccer.page';

describe('SoccerPage', () => {
  let component: SoccerPage;
  let fixture: ComponentFixture<SoccerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoccerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SoccerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
