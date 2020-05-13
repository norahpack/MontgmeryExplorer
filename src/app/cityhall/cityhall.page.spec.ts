import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CityhallPage } from './cityhall.page';

describe('CityhallPage', () => {
  let component: CityhallPage;
  let fixture: ComponentFixture<CityhallPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CityhallPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CityhallPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
