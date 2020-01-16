import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Firstp2Page } from './firstp2.page';

describe('Firstp2Page', () => {
  let component: Firstp2Page;
  let fixture: ComponentFixture<Firstp2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Firstp2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Firstp2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
