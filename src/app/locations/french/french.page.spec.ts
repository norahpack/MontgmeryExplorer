import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FrenchPage } from './french.page';

describe('FrenchPage', () => {
  let component: FrenchPage;
  let fixture: ComponentFixture<FrenchPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrenchPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FrenchPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
