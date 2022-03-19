
/**
Proyecto de formación SENA (WAKA)
  Descripción: codigo TypeSript del Componente modal = seleccionar como desea pagar, esté se mostrara despues de terminar la estadia en el parqueadero (lo visualiza el rol BP).
  Autor:@SamuelCanoRomero
  Fecha de creación:/02/2022
  Ultima fecha de modificación:17/03/2022
*/


//?importar la libreria de angular para componentes y la iniciación del mismo.
import { Component, OnInit } from '@angular/core';
//?importar la libreria de ionic de alertas para una implementación y modificacion de alertas.
import { AlertController } from '@ionic/angular';

//!contiene informació importante del componente(modal).
@Component({
  //selector indica el nombre con el cual se debe (llamar) en el caso de ser requerido en alguna vista.
  selector: 'app-modal',
  //indica la ubicación de  la estructuración (html) de este componente en especifico para conectarlos.
  templateUrl: './modal.component.html',
  //indica la ubicación del estilo (scss) de este componente en especifico para conectarlos.
  styleUrls: ['./modal.component.scss'],
})

//**exporta la class modalcomponent e implementa el oninit (iniciar este mismo) por el ciclo de vida que estos debe tener.
export class ModalComponent implements OnInit {

  //constructor  Se encarga de asegurar la correcta inicialización de los campos, tanto de la clase como de sus subclases 
  //le estamos enviando el parametro Alertcontroller (el cual se esta  importando)
  constructor(public alertController: AlertController) { }

  //ngOnInit pertenece al ciclo de vidad de angular y aqui se le esta indicando que el componenete ya esta listo para darle uso
  ngOnInit() {}


  //*ya estamos generando un modal ionic
  async modal() {
    //funcion para crear el modal=alerta
    const alert = await this.alertController.create({
      //indicamos el nombre (clas) para 'llamarlo' y darle estilos a este mismo
      cssClass: 'custom-modal',
      //titulo que contendra el modal
      header: '',
      //texto el cual contendra el modal
      message: '¿ Que metodo de pago vas a usar ?',
      //implemetar boton en este caso la obcion en efectivo
      buttons: [
        {
          cssClass: 'btn-modal',
          text: 'efectivo',
          id: 'confirm-button',
          handler: () => {
            console.log('efectivo');
          }
        }
      ],
    //colocar el fondo en gris en este caso esta en false
      backdropDismiss: false,
    });
  //una vez creado el modal lo muestra
    await alert.present();
  }

}
