import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Thirdp1Page } from './thirdp1.page';

describe('Thirdp1Page', () => {
  let component: Thirdp1Page;
  let fixture: ComponentFixture<Thirdp1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Thirdp1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Thirdp1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
