import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FirePage } from './fire.page';

describe('FirePage', () => {
  let component: FirePage;
  let fixture: ComponentFixture<FirePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FirePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
