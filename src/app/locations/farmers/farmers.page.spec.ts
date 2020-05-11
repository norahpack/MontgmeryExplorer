import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FarmersPage } from './farmers.page';

describe('FarmersPage', () => {
  let component: FarmersPage;
  let fixture: ComponentFixture<FarmersPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FarmersPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FarmersPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
