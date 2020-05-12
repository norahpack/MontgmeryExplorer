import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SherrittreesPage } from './sherrittrees.page';

describe('SherrittreesPage', () => {
  let component: SherrittreesPage;
  let fixture: ComponentFixture<SherrittreesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SherrittreesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SherrittreesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
