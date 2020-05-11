import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TornadopicsPage } from './tornadopics.page';

describe('TornadopicsPage', () => {
  let component: TornadopicsPage;
  let fixture: ComponentFixture<TornadopicsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TornadopicsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TornadopicsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
