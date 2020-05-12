import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SnidercrainPage } from './snidercrain.page';

describe('SnidercrainPage', () => {
  let component: SnidercrainPage;
  let fixture: ComponentFixture<SnidercrainPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnidercrainPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SnidercrainPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
