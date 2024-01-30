
const nav = document.querySelector('.nav');

window.addEventListener('scroll', function() {
  nav.classList.toggle('active', window.scrollY > 0);
});

//ESTE ES EL BOTON DEL MUTE DE LA PAGINA PRINCIPAL!
let audio = document.getElementById("miAudio");
let boton = document.getElementById("botonAudio");
function controlarAudio() {
  if (audio.paused) {
    audio.play();
  } else {
    audio.pause();
  }
}
//ESTE ES EL SONIDO DE LA CAJA DEL ANIMAL
function reproducirSonido() {
  let sonido = document.getElementById("miSonido");
  sonido.play();
}
// Asociar la función al evento clic de la imagen con id "miImagen"
let imagen = document.getElementById("miImagen");
imagen.addEventListener("click", function() {
    reproducirSonido();
    verificarRespuesta("animalElegido"); // Reemplaza "animalElegido" con la lógica para obtener la opción seleccionada
});

function reproducirSonidoCorrecto(){
  let sonido = document.getElementById("correcto");
  sonido.play();
}
// Asociar la función al evento clic de la imagen con id "Perro"
let Rcorrect = document.getElementById("Buho");
Rcorrect.addEventListener("click", function() {
    reproducirSonidoCorrecto();
    mostrarAlerta();

});
function mostrarAlerta() {
  const swalWithBootstrapButtons = Swal.mixin({
    buttonsStyling: true // Habilitar estilos de SweetAlert2 para los botones
  });

  //ALARMA DE SIGUIENTE NIVEL!!!!
  swalWithBootstrapButtons.fire({
    imageWidth: '400px',
    imageHeight: '350px',
    imageAlt: 'imageNextNevel',
    padding: '1rem',
    grow: 'row',
    background:'',
    backdrop: true,
    title:'<h2 class="title-Victoria">Felicidades!<br> Has Desbloqueado la Categoria Intermedio.</h2>',
    html: '<b class="texto-alarm-Victoria">Preparate para un Nuevo Desafio.</b>',
    icon: 'success',
    showCancelButton: true,
    confirmButtonText: "Siguiente Nivel",
    cancelButtonText: "Repetir Nivel",
    footer:'<b class="footer-principal">Recuerda que no se guardaran los Cambios...<br>',
    allowOutsideClick: false,
    timer: 10000,
    timerProgressBar: true,
    reverseButtons: true
  }).then((result) => {
    if (result.isConfirmed) {
      swalWithBootstrapButtons.fire({
        imageUrl: '/img/Buho.jpg',
        imageWidth: '350px',
        imageHeight: '350px',
        title: "Genial! Vamos al Desafio..",
        text: "Sigamos Aprendiendo!!",
        icon: "success",
        confirmButtonText: "OK"  // Añadimos un botón de confirmación
}).then((result) => {
  if (result.isConfirmed) {
    // Redirigir a la otra página HTML
    window.location.href = '/pages/animales7.html';
  }      
      });
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      swalWithBootstrapButtons.fire({
        html: '<b class="title-repetir">Reintentar Nivel</b>',
        html:'<b class="text-repetir">Genial, Aprendamos Nuevamente!</b',
        icon: "warning",
        background:'#444444',
        
      });
    }
  });
  
}


// Asociar la función al evento clic del botón
document.getElementById('mostrarAlerta').addEventListener('click', mostrarAlerta);

function reproducirSonidoIncorrecto(){
  let sonido = document.getElementById("incorrecto");
  sonido.play();
}
// Asociar la función al evento clic de la imagen con id "Leon"
let Rincorrect = document.getElementById("Perro");
Rincorrect.addEventListener("click", function() {
    reproducirSonidoIncorrecto();
    mostrarAlertaIncorrecta();
});
// Asociar la función al evento clic de la imagen con id "Leon"
let Rincorrect1 = document.getElementById("Koala");
Rincorrect1.addEventListener("click", function() {
    reproducirSonidoIncorrecto();
    mostrarAlertaIncorrecta();
});
// Función para mostrar la alarma de respuesta incorrecta
function mostrarAlertaIncorrecta() {
  Swal.fire({
  icon: "error",
  title: '<h2 class="title-oops">Oops...</h2>',
  html: '<b class="text-alarm">Juguemos de Nuevo<br>Te has Equivocado:(</b>',
  footer: '<a href="/pages/ayudaanimales.html" class="enlace-ayuda">Necesitas Ayuda?</a>',
  background:'#444444',
  });
}


