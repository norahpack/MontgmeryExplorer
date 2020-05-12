import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MasonPage } from './mason.page';

describe('MasonPage', () => {
  let component: MasonPage;
  let fixture: ComponentFixture<MasonPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MasonPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MasonPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
