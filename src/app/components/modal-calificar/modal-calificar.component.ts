/**
Proyecto de formación SENA (WAKA)
  Descripción: codigo TypeSript del Componente calificar = seleccionar una calificación, esté se mostrara despues de terminar la estadia en el parqueadero (lo visualiza el rol BP).
  Autor:@SamuelCanoRomero
  Fecha de creación:/02/2022
  Ultima fecha de modificación:17/03/2022
*/

//?importar la libreria de angular para componentes y la iniciación del mismo.
import { Component, OnInit } from '@angular/core';
//?importar la libreria de ionic de alertas para una implementación y modificacion de alertas.
import { AlertController } from '@ionic/angular';


//!contiene informació importante del componente(calificar).
@Component({
  selector: 'app-modal-calificar',
  templateUrl: './modal-calificar.component.html',
  styleUrls: ['./modal-calificar.component.scss'],
})


//**exporta la class modalCalificarcomponent e implementa el oninit (iniciar este mismo) por el ciclo de vida que estos debe tener.
export class ModalCalificarComponent implements OnInit {

  //constructor  Se encarga de asegurar la correcta inicialización de los campos, tanto de la clase como de sus subclases 
  //le estamos enviando el parametro Alertcontroller (el cual se esta  importando)
  constructor(public alertController: AlertController) { }

  //ngOnInit pertenece al ciclo de vidad de angular y aqui se le esta indicando que el componenete ya esta listo para darle uso
  ngOnInit() {}


  //*ya estamos generando un modal ionic
  async calificar() {
    //funcion para crear el modal=alerta
    const alert = await this.alertController.create({
      //indicamos el nombre (clas) para 'llamarlo' y darle estilos a este mismo
      cssClass: '',
      //titulo que contendra el modal
      header: '',
      //texto el cual contendra el modal
      message: '¿ Que tal te parecio el servicio ?',
      //implemetar boton en este caso los representamos como estrellas para la calificación
      buttons: [
        {
          cssClass: 'rating__star far fa-star',
          text: '',
          id: 'rating',
          handler: () => {
            console.log(1);
          }
        },
        {
          cssClass: 'rating__star far fa-star',
          text: '',
          id: 'rating',
          handler: () => {
            console.log(2);
          }
        },
        {
          cssClass: 'rating__star far fa-star',
          text: '',
          id: 'rating',
          handler: () => {
            console.log(3);
          }
        },
        {
          cssClass: 'rating__star far fa-star',
          text: '',
          id: 'rating',
          handler: () => {
            console.log(4);
          }
        },
        {
          cssClass: 'rating__star far fa-star',
          text: '',
          id: 'rating',
          handler: () => {
            console.log(5);
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
