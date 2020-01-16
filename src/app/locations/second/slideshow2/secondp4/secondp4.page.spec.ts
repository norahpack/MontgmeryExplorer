import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Secondp4Page } from './secondp4.page';

describe('Secondp4Page', () => {
  let component: Secondp4Page;
  let fixture: ComponentFixture<Secondp4Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Secondp4Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Secondp4Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
