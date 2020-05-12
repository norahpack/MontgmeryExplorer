import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { WooleykelschPage } from './wooleykelsch.page';

describe('WooleykelschPage', () => {
  let component: WooleykelschPage;
  let fixture: ComponentFixture<WooleykelschPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WooleykelschPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(WooleykelschPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
