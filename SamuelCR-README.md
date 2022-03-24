# waka-SamuelCR
## Introducción
A lo largo de este Documento se visualizaran mis actividades realizadas en el proyecto formativo WAKA. Este es referente a el trimestre en curso de [analisis y desarrollo de sistemas informacion (ADSI)][link] el cual estoy cursando en el [centro de biotecnologia agropecuarioa (CBA) de Mosquera][Ubi-sena].

![logo](https://lostramites.com.co/wp-content/uploads/logo-sena-fondo-naranja-300x300.jpg "Logo SENA")


## Referente al proyecto (WAKA)   
**lenguajes:**    
- HTML    
- SCSS    
- TypeScript    

**herramientas:**      
- Angular      
- Ionic      
- MongoDB      
- NodeJs y ExpressJs     
- MapBooks   
- Postman      

**componentes generados por mi** _(vistas)_      
- modal-calificar     
componenente modal para dar calificacion mediante 5 estrellas.          
- modal     
componente modal para avisar y confirmar el metodo de pago (efectivo).      
- novedades-auto            
componente modal para ingresar informacion del auto que ingresó (foto y descripcion).             

**paginas generadas por mi** _(vistas)_     
- registro
para crear un nuevo usuario en waka.     
formulario reactivo     
estilos     
- new-pass   
cuando un usuario quiere cambiar la contraseña de su cuenta.         
formulario reactivo     
estilos      
- novedades       
componente modal para ingresar informacion del auto que ingresó (foto y descripcion).      
formulario      
estilos      
- acceso-estadisticas   
validar y dra ingreso para visualizar estadisticas       
formulario     
estilos       
- term-condi     
- validar-user     

**paginas modificadas por mi** _(modificadas)_    
- perfil BP    
visualizar informacion de mi cuenta rol BP y boton deshabilitar cuenta.         
incluir el boton deshabilitar la cuenta     
mostrar el mensaje cuando el usuario deshabilita su cuenta    
- perfil PP    
visualizar informacion de mi cuenta rol pp y boton deshabilitar cuenta.           
incluir el boton deshabilitar la cuenta     
mostrar el mensaje cuando el usuario deshabilita su cuenta              
- formulario-BP     
crear un nuevo vehiculo en mi cuenta.         
validar el tipado de los campos del formulario      
incluir campo de opcion del tipo      
animacion boton      
- formulario-agregar-vehiculo      
crear un nuevo  vehiculo en mi cuenta.      
validar el tipado de los campos del formulario     
incluir campo de opcion del tipo     
animacion boton    

**servicios implementados por mi**         
servicios los cuales estan en listados y documentados en [postman][postman].    
- cambiar la contraseña de una cuenta    
cambiar la contraseña de una cuenta ya existente.      
- eliminar vehiculo     
~~~
eliminarVehiculo(token){
  return this.http.delete(`${this.url}/vehicle/delete-vehicle-user/623c7d9987eaab7ef964e795`, { headers: { authorization_token: token } })
  }
~~~
eliminar un vehiculo ya existente.       
- crear vehiculo            
crear o añadir un vehiculo de mi lista.  
~~~
addVehicleUser(token, infoCar) {
    return this.http.post(`${this.url}/vehicle/add-vehicle-user`, infoCar, { headers: { authorization_token: token } })
  }
~~~
- deshabilitar cuenta de un usuario                      
deshabilitar una cuenta ya creada.            
~~~     
  inhabilitarUsuario(token) {
    return this.http.delete(`${this.url}/users/disable-account`, { headers: { authorization_token: token } })
  }
~~~   
       


## Sobre Mi
Soy Samuel Cano Romero aprendiz SENA, programador junnior especializado en Front-end.

He cursado un tecnico en programacion de software en decimo y once en el colegio [IED Instituto Parcelas][pag-cole] ubicado en Cota, actualmente estoy cursando un tecnologo en analisis y desarrollo de sistemas de informacion en el [centro de biotecnologia agropecuarioa (CBA) de Mosquera][Ubi-sena]

- correo: Bscano67@misena.edu.co       
- GitHub: [SamuelCR][cuenta-git]

[link]: http://oferta.senasofiaplus.edu.co/sofia-oferta/inicio-sofia-plus.html
[Ubi-sena]: https://www.google.com/maps/place/SENA+Mosquera+-+Centro+de+Biotecnolog%C3%ADa+Agropecuaria+(CBA)/@4.6957037,-74.2178147,17z/data=!3m1!4b1!4m5!3m4!1s0x8e3f9d58cf6e291b:0x8946ec678fcf04b4!8m2!3d4.6957037!4d-74.215626
[pag-cole]: http://institutoparcelas.edu.co/
[postman]: https://documenter.getpostman.com/view/19653538/UVkmQcek#4bd1d743-c961-4272-acd4-13fc1d7da94b
[cuenta-git]: https://github.com/SamuelCanoRomero
