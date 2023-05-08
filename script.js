// Esperar a que se cargue el contenido de la página
document.addEventListener("DOMContentLoaded", function () {
  var primerImagen = document.getElementById('imagen1');
  var segundaImagen = document.getElementById('imagen2');
  var terceraImagen = document.getElementById('imagen3');
  const cajasASoltar = document.querySelectorAll(".caja-a-soltar");// array a recorrer

  
/*video*/

const playBoton = document.getElementById('play');
const pausaBoton = document.getElementById('pausa');
const video = document.getElementById('video');




playBoton.addEventListener('click',()=>{
  video.play()


 
});

pausaBoton.addEventListener('click',()=>{
  video.pause();
  flag=false;
 
});


  let dragged = null;

  primerImagen.addEventListener('dragstart', (event) => {
    dragged = event.target;
  });
  segundaImagen.addEventListener('dragstart', (event) => {
    console.log(event.target)
    dragged = event.target;
  });
  terceraImagen.addEventListener('dragstart', (event) => {
    dragged = event.target;
  });

  for (var i = 0; i < cajasASoltar.length; i++) {

    cajasASoltar[i].addEventListener('dragover', (event) => {
      event.preventDefault()
    })

    cajasASoltar[i].addEventListener('drop', (event) => {
      event.preventDefault();
      if (event.target.id === 'droptarget') {
        dragged.parentNode.removeChild(dragged);
        event.target.appendChild(dragged);
      }
      event.target.firstElementChild.remove()
      dragged = null;
  
    }) }


    const botonReinicio = document.querySelector('.boton-reinicio');

botonReinicio.addEventListener('click', () => {
  reinicio();
});

function reinicio() {
  window.location.reload();
}


 })

