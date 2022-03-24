import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormularioAgregarVehiculoPage } from './formulario-agregar-vehiculo.page';

describe('FormularioAgregarVehiculoPage', () => {
  let component: FormularioAgregarVehiculoPage;
  let fixture: ComponentFixture<FormularioAgregarVehiculoPage>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ FormularioAgregarVehiculoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormularioAgregarVehiculoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
