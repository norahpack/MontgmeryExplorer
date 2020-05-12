import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SmethurstPage } from './smethurst.page';

describe('SmethurstPage', () => {
  let component: SmethurstPage;
  let fixture: ComponentFixture<SmethurstPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmethurstPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SmethurstPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
