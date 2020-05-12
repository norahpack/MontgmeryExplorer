import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CristPage } from './crist.page';

describe('CristPage', () => {
  let component: CristPage;
  let fixture: ComponentFixture<CristPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CristPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CristPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
