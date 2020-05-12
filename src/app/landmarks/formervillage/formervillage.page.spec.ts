import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormervillagePage } from './formervillage.page';

describe('FormervillagePage', () => {
  let component: FormervillagePage;
  let fixture: ComponentFixture<FormervillagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormervillagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormervillagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
