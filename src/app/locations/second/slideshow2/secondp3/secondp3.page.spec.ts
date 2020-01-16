import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Secondp3Page } from './secondp3.page';

describe('Secondp3Page', () => {
  let component: Secondp3Page;
  let fixture: ComponentFixture<Secondp3Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Secondp3Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Secondp3Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
