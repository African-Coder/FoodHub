import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VendorRegPage } from './vendor-reg.page';

describe('VendorRegPage', () => {
  let component: VendorRegPage;
  let fixture: ComponentFixture<VendorRegPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VendorRegPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VendorRegPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
