import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrainconklinPage } from './crainconklin.page';

describe('CrainconklinPage', () => {
  let component: CrainconklinPage;
  let fixture: ComponentFixture<CrainconklinPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrainconklinPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrainconklinPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
