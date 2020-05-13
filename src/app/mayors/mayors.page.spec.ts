import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MayorsPage } from './mayors.page';

describe('MayorsPage', () => {
  let component: MayorsPage;
  let fixture: ComponentFixture<MayorsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MayorsPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MayorsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
