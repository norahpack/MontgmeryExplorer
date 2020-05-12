import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BlairbarkerPage } from './blairbarker.page';

describe('BlairbarkerPage', () => {
  let component: BlairbarkerPage;
  let fixture: ComponentFixture<BlairbarkerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlairbarkerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BlairbarkerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
