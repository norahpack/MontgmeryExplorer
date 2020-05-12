import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { YostPage } from './yost.page';

describe('YostPage', () => {
  let component: YostPage;
  let fixture: ComponentFixture<YostPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YostPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(YostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
