import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UniversalistPage } from './universalist.page';

describe('UniversalistPage', () => {
  let component: UniversalistPage;
  let fixture: ComponentFixture<UniversalistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniversalistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UniversalistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
