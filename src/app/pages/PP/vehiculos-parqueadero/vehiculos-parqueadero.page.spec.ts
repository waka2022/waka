import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VehiculosParqueaderoPage } from './vehiculos-parqueadero.page';

describe('VehiculosParqueaderoPage', () => {
  let component: VehiculosParqueaderoPage;
  let fixture: ComponentFixture<VehiculosParqueaderoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ VehiculosParqueaderoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VehiculosParqueaderoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
