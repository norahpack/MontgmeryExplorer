import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Firstp1Page } from './firstp1.page';

describe('Firstp1Page', () => {
  let component: Firstp1Page;
  let fixture: ComponentFixture<Firstp1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Firstp1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Firstp1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
