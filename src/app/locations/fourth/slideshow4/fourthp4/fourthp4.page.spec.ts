import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Fourthp4Page } from './fourthp4.page';

describe('Fourthp4Page', () => {
  let component: Fourthp4Page;
  let fixture: ComponentFixture<Fourthp4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fourthp4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Fourthp4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
