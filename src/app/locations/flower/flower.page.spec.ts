import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FlowerPage } from './flower.page';

describe('FlowerPage', () => {
  let component: FlowerPage;
  let fixture: ComponentFixture<FlowerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlowerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FlowerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
