import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BellPage } from './bell.page';

describe('BellPage', () => {
  let component: BellPage;
  let fixture: ComponentFixture<BellPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BellPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BellPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
