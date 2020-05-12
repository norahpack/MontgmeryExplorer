import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CraineberhardPage } from './craineberhard.page';

describe('CraineberhardPage', () => {
  let component: CraineberhardPage;
  let fixture: ComponentFixture<CraineberhardPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CraineberhardPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CraineberhardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
