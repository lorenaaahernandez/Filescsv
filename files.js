function validarExt()
  {
      var archivoInput = document.getElementById('archivoInput');
      var archivoRuta = archivoInput.value;
      var extPermitidas = /(.pdf|.csv|.png|.jpg)$/i;
      
      if(!extPermitidas.exec(archivoRuta))
      {
          alert("Tipo de archivo no permitido");
          archivoInput.value='';
          return true;
      }

      else
      {
          if(archivoInput.files && archivoInput.files[0])
          {
              alert('Archivo Cargado, Espere');
              var visor = new FileReader();
              visor.onload=function(e)
              {
                  document.getElementById('visorArchivo').innerHTML=
                  '<embed src="'+e.target.result+'" width="500" heigth="500" >';                    }
              };
              visor.readAsDataURL(archivoInput.files[0]);
          }
      } 
     

     //aqui va la validacion de el segundo boton (contador)
     //mensajes de alerta en la validacion
