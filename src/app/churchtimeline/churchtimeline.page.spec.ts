import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ChurchtimelinePage } from './churchtimeline.page';

describe('ChurchtimelinePage', () => {
  let component: ChurchtimelinePage;
  let fixture: ComponentFixture<ChurchtimelinePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChurchtimelinePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ChurchtimelinePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
