import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JohnsonmurdoughPage } from './johnsonmurdough.page';

describe('JohnsonmurdoughPage', () => {
  let component: JohnsonmurdoughPage;
  let fixture: ComponentFixture<JohnsonmurdoughPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JohnsonmurdoughPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JohnsonmurdoughPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
