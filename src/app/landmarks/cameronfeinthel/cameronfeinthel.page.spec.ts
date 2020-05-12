import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CameronfeinthelPage } from './cameronfeinthel.page';

describe('CameronfeinthelPage', () => {
  let component: CameronfeinthelPage;
  let fixture: ComponentFixture<CameronfeinthelPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CameronfeinthelPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CameronfeinthelPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
