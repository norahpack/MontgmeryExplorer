import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SagePage } from './sage.page';

describe('SagePage', () => {
  let component: SagePage;
  let fixture: ComponentFixture<SagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
