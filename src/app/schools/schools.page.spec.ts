import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SchoolsPage } from './schools.page';

describe('SchoolsPage', () => {
  let component: SchoolsPage;
  let fixture: ComponentFixture<SchoolsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchoolsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SchoolsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
