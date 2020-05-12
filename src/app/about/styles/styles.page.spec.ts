import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StylesPage } from './styles.page';

describe('StylesPage', () => {
  let component: StylesPage;
  let fixture: ComponentFixture<StylesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StylesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StylesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
