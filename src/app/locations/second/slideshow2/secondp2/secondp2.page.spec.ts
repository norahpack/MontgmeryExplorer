import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Secondp2Page } from './secondp2.page';

describe('Secondp2Page', () => {
  let component: Secondp2Page;
  let fixture: ComponentFixture<Secondp2Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Secondp2Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Secondp2Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
