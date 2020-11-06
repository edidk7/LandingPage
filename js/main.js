let inicializar = function () {


    $('.navbar-nav>li>a').on('click', function(){
        $('.navbar-toggler').click();
    });
    
    // $('.nav-item').click(function(){
    //     console.log("cierra el menu responsive");
    //     $('.navbar-collapse').collapse('hide');
    //     $(".navbar-toggler").click();
    // });

    // Añadir clase al header del background en dispositivos móviles
    let viewportWidth = $(window).width();
    if (viewportWidth < 991) {
            $(".navbar").addClass("bg-dark");
    }
      
    // Muestra / esconde el botón del scroll top
    $(window).scroll(function(){
        if($(this).scrollTop() > 800){
            $('.scrollTop').fadeIn();
        } else{
            $('.scrollTop').fadeOut();
        }
    });

    // Implementación del scroll top
    $('.scrollTop').click(function(){
        $('html,body').animate({scrollTop: 0}, 1000)
    });    

    // Ocultar scroll-bar-y al abrir el menú
    $('#open-menu').click(function(){
        $('html').css('overflow', 'hidden');
    });
}

$(document).ready(inicializar);

$('#close-menu').click(function() {
    $('html').css('overflow', 'auto');
    $('html').css('overflow-x', 'hidden');
});

$(window).on("load, resize", function() {
    var viewportWidth = $(window).width();
    if (viewportWidth < 991) {
            $(".navbar").addClass("bg-dark");
    }
});  


$(window).on("load, resize", function() {
    var viewportWidth = $(window).width();
    if (viewportWidth >  991) {
            $(".navbar").removeClass("bg-dark");
    }
});           

var overlay = document.getElementById('overlay');
var closeMenu = document.getElementById('close-menu');



document.getElementById('open-menu').addEventListener('click', function() {
    console.log("muestra el menu ")
    overlay.classList.add('show-menu')
});

document.getElementById('close-menu').addEventListener('click', function() {
    console.log("Cierra el menu ")
    overlay.classList.remove('show-menu')
});


$("ul.navbar-nav li a").click(function() {
    $("nav#mobile-nav").slideUp("fast");
});

// Inicializando el plugin para mostrar contenido con animaciones de entrada
AOS.init();


// Inicializando el carrousel para dispositivos móviles
$('#owl-carousel-responsive-home').owlCarousel({
    navigation: true, // Show next and prev buttons
    autoplay: true,
    autoplayTimeout: 10000,
    slideSpeed: 400,
    loop: true,
    paginationSpeed: 500,
    nav: true,
    items: 1,
    dots: true,
    dotsData:true,  
    itemsDesktop: false,
    itemsDesktopSmall: false,
    itemsTablet: false,
    itemsMobile: false,
    animateOut: 'slideOutDown',
    animateIn: 'flipInX',
    autoHeight:true                 
            
})

// carrousel para section "Nuestros Reconocimientos"
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 2,
    autoHeight : true,
    paginationSpeed: 500,
    nav: false,
    autoplay:true,
    dots: true,
    dotsData:true,   
    autoplay:true,
    autoplayTimeout:4000,
    slideSpeed: 400,
    autoplayHoverPause:true,                
    responsive: {
        0: {
            dotsEach: 3,
            items: 1
        },             
        600: {
            dotsEach: 3,
            items: 1
        },
        1000: {
            dotsEach: 3,
            items: 2
        }
    }
})

 function smoothScroll(){

}