import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MillshellmanPage } from './millshellman.page';

describe('MillshellmanPage', () => {
  let component: MillshellmanPage;
  let fixture: ComponentFixture<MillshellmanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MillshellmanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MillshellmanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
