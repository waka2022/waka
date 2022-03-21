# waka-SamuelCR
## Introducción
A lo largo de este Documento se visualizaran mis actividades realizadas en el proyecto formativo WAKA. Este es referente a el trimestre en curso de [analisis y desarrollo de sistemas informacion (ADSI)][link] el cual estoy cursando en el [centro de biotecnologia agropecuarioa (CBA) de Mosquera][Ubi-sena].

![logo](https://lostramites.com.co/wp-content/uploads/logo-sena-fondo-naranja-300x300.jpg "Logo SENA")


### Referente al proyecto (WAKA)
-**lenguajes:**    
    -HTML    
    -SCSS    
    -TypeScript    

-**herramientas:**      
    -Angular      
    -Ionic      
    -MongoDB      
    -NodeJs y ExpressJs     
    -MapBooks     

-**componentes generados por mi** _(vistas)_      
    -modal-calificar     
    -modal     
    -novedades-auto    

-**paginas generadas por mi** _(vistas)_     
    -registro      
        -formulario reactivo     
        -estilos     
    -new-pass     
        -formulario reactivo     
        -estilos      
    -novedades      
        -formulario      
        -estilos      
    -acceso-estadisticas     
        -formulario     
        -estilos       
    -term-condi     
    -validar-user     

-**paginas modificadas por mi** _(modificadas)_    
    -perfil BP    
        -incluir el boton deshabilitar la cuenta     
        -mostrar el mensaje cuando el usuario deshabilita su cuenta    
    -perfil PP     
        -incluir el boton deshabilitar la cuenta     
        -mostrar el mensaje cuando el usuario deshabilita su cuenta     
    -formulario-BP     
        -validar el tipado de los campos del formulario      
        -incluir campo de opcion del tipo      
        -animacion boton      
    -formulario-agregar-vehiculo      
        -validar el tipado de los campos del formulario     
        -incluir campo de opcion del tipo     
        -animacion boton    

-**servicios implementados por mi**   
    -cambiar la contraseña de una cuenta     
    -eliminar vehiculo   
    -crear vehiculo
    -deshabilitar cuenta de un usuario        
~~~     
  inhabilitarUsuario(token) {
    return this.http.delete(`${this.url}/users/disable-account`, { headers: { authorization_token: token } })
  }
~~~   
       


#### Sobre Mi
Soy Samuel Cano Romero aprendiz SENA, programador junnior especializado en Front-end.

He cursado un tecnico en programacion de software en decimo y once en el colegio [IED Instituto Parcelas][pag-cole] ubicado en Cota, actualmente estoy cursando un tecnologo en analisis y desarrollo de sistemas de informacion en el [centro de biotecnologia agropecuarioa (CBA) de Mosquera][Ubi-sena]

correo: Bscano67@misena.edu.co


[link]: http://oferta.senasofiaplus.edu.co/sofia-oferta/inicio-sofia-plus.html
[Ubi-sena]: https://www.google.com/maps/place/SENA+Mosquera+-+Centro+de+Biotecnolog%C3%ADa+Agropecuaria+(CBA)/@4.6957037,-74.2178147,17z/data=!3m1!4b1!4m5!3m4!1s0x8e3f9d58cf6e291b:0x8946ec678fcf04b4!8m2!3d4.6957037!4d-74.215626
[pag-cole]: http://institutoparcelas.edu.co/
