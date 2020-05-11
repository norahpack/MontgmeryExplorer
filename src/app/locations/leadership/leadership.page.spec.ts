import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LeadershipPage } from './leadership.page';

describe('LeadershipPage', () => {
  let component: LeadershipPage;
  let fixture: ComponentFixture<LeadershipPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeadershipPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LeadershipPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
