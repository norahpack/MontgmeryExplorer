import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PureoilPage } from './pureoil.page';

describe('PureoilPage', () => {
  let component: PureoilPage;
  let fixture: ComponentFixture<PureoilPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PureoilPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PureoilPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
