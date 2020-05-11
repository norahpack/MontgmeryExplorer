import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TedPage } from './ted.page';

describe('TedPage', () => {
  let component: TedPage;
  let fixture: ComponentFixture<TedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
