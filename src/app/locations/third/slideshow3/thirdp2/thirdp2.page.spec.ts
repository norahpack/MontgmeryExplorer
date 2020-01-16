import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Thirdp2Page } from './thirdp2.page';

describe('Thirdp2Page', () => {
  let component: Thirdp2Page;
  let fixture: ComponentFixture<Thirdp2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Thirdp2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Thirdp2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
