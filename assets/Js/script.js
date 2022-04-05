var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

/* <!-- Sección 1 : Barra Navegación --> */

// Esta función sirve para opacar el backgrond de la  barra (navbar)
var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
       $("#barra").removeClass( "bg-transparent" ).addClass( "bg-info" );
});


//  Esta función sirve para solicita al usuario que introduzca un texto (prompt)
//  y enviar un mensaje (alert)
$ (function(){
  $('#iniciosesion').click(function(){
    var nombre = prompt ("Ingrese su Nombre")
    var apellido = prompt ("Ingrese su Apellido")
    var NombreCompleto = `Bienvenido ${nombre} ${apellido} a Viajes Chile`
    alert (NombreCompleto)
  })
});

// Esta función sirve para opacar el background del menú desplegable al apretar el botón hamburguesa
$("#btn-nav").click(function(){
  $("#navbar").removeClass( "bg-transparent" ).addClass( "bg-primary" );
});


