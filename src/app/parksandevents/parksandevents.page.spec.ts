import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParksandeventsPage } from './parksandevents.page';

describe('ParksandeventsPage', () => {
  let component: ParksandeventsPage;
  let fixture: ComponentFixture<ParksandeventsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParksandeventsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParksandeventsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
