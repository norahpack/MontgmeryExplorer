import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Fourthp3Page } from './fourthp3.page';

describe('Fourthp3Page', () => {
  let component: Fourthp3Page;
  let fixture: ComponentFixture<Fourthp3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fourthp3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Fourthp3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
