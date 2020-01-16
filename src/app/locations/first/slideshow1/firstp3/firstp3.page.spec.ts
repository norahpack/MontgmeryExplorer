import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Firstp3Page } from './firstp3.page';

describe('Firstp3Page', () => {
  let component: Firstp3Page;
  let fixture: ComponentFixture<Firstp3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Firstp3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Firstp3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
