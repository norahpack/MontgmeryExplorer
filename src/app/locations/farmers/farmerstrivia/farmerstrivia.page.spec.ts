import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FarmerstriviaPage } from './farmerstrivia.page';

describe('FarmerstriviaPage', () => {
  let component: FarmerstriviaPage;
  let fixture: ComponentFixture<FarmerstriviaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmerstriviaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FarmerstriviaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
