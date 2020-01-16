import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Fourthp1Page } from './fourthp1.page';

describe('Fourthp1Page', () => {
  let component: Fourthp1Page;
  let fixture: ComponentFixture<Fourthp1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Fourthp1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Fourthp1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
