import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TavernPage } from './tavern.page';

describe('TavernPage', () => {
  let component: TavernPage;
  let fixture: ComponentFixture<TavernPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TavernPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TavernPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
