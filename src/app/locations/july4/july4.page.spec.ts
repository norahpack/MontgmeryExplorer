import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { July4Page } from './july4.page';

describe('July4Page', () => {
  let component: July4Page;
  let fixture: ComponentFixture<July4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ July4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(July4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
