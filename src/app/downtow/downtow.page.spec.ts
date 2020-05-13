import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DowntowPage } from './downtow.page';

describe('DowntowPage', () => {
  let component: DowntowPage;
  let fixture: ComponentFixture<DowntowPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DowntowPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DowntowPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
