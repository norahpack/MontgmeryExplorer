import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SniderPage } from './snider.page';

describe('SniderPage', () => {
  let component: SniderPage;
  let fixture: ComponentFixture<SniderPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SniderPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SniderPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
