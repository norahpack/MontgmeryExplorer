import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CertPage } from './cert.page';

describe('CertPage', () => {
  let component: CertPage;
  let fixture: ComponentFixture<CertPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CertPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CertPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
