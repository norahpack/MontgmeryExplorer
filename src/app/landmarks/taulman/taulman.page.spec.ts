import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TaulmanPage } from './taulman.page';

describe('TaulmanPage', () => {
  let component: TaulmanPage;
  let fixture: ComponentFixture<TaulmanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TaulmanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TaulmanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
