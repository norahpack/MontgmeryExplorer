import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Fourthp2Page } from './fourthp2.page';

describe('Fourthp2Page', () => {
  let component: Fourthp2Page;
  let fixture: ComponentFixture<Fourthp2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fourthp2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Fourthp2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
