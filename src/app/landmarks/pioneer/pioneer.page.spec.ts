import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PioneerPage } from './pioneer.page';

describe('PioneerPage', () => {
  let component: PioneerPage;
  let fixture: ComponentFixture<PioneerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PioneerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PioneerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
