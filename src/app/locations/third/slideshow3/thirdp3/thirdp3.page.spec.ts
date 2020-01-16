import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Thirdp3Page } from './thirdp3.page';

describe('Thirdp3Page', () => {
  let component: Thirdp3Page;
  let fixture: ComponentFixture<Thirdp3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Thirdp3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Thirdp3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
