import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Secondp1Page } from './secondp1.page';

describe('Secondp1Page', () => {
  let component: Secondp1Page;
  let fixture: ComponentFixture<Secondp1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Secondp1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Secondp1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
