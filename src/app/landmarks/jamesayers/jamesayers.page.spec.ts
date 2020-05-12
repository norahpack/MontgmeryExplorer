import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JamesayersPage } from './jamesayers.page';

describe('JamesayersPage', () => {
  let component: JamesayersPage;
  let fixture: ComponentFixture<JamesayersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JamesayersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JamesayersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
