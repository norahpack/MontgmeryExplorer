import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Thirdp4Page } from './thirdp4.page';

describe('Thirdp4Page', () => {
  let component: Thirdp4Page;
  let fixture: ComponentFixture<Thirdp4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Thirdp4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Thirdp4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
