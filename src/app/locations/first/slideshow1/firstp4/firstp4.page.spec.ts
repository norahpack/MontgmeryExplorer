import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Firstp4Page } from './firstp4.page';

describe('Firstp4Page', () => {
  let component: Firstp4Page;
  let fixture: ComponentFixture<Firstp4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Firstp4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Firstp4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
