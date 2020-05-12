import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { StixdurbrowPage } from './stixdurbrow.page';

describe('StixdurbrowPage', () => {
  let component: StixdurbrowPage;
  let fixture: ComponentFixture<StixdurbrowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StixdurbrowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(StixdurbrowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
