import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ParrottPage } from './parrott.page';

describe('ParrottPage', () => {
  let component: ParrottPage;
  let fixture: ComponentFixture<ParrottPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParrottPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ParrottPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
