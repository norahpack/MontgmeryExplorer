import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { GroverkjellenbergPage } from './groverkjellenberg.page';

describe('GroverkjellenbergPage', () => {
  let component: GroverkjellenbergPage;
  let fixture: ComponentFixture<GroverkjellenbergPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroverkjellenbergPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(GroverkjellenbergPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
