import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LandmarksPage } from './landmarks.page';

describe('LandmarksPage', () => {
  let component: LandmarksPage;
  let fixture: ComponentFixture<LandmarksPage>;
  let landmarksPage: HTMLElement;


  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LandmarksPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LandmarksPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

    it('should have a list of 34 elements', () => {
    listPage = fixture.nativeElement;
    const items = listPage.querySelectorAll('ion-item');
    expect(items.length).toEqual(34);
  });
});
