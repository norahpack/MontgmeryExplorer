import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { NeuillyPage } from './neuilly.page';

describe('NeuillyPage', () => {
  let component: NeuillyPage;
  let fixture: ComponentFixture<NeuillyPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NeuillyPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(NeuillyPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
