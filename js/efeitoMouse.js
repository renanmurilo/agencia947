/* FUNCTION MOUSEOVER PORTIFÓLIO */

$(document).ready(function(){
    $(".efeito, .efeitoLeft").mouseenter(function(){
        $(this).css("opacity", "1");
    });
    $(".efeito, .efeitoLeft").mouseleave(function(){
        $(this).css("opacity", "0");
    });
});

/* FUNCTION MOUSEOVER PORTIFÓLIO */

/* FUNCTION MOUSEOVER CAROUSEL */

$(document).ready(function(){
    $(".efeitoCarousel").mouseenter(function(){
        $(this).css("opacity", "1");
    });
    $(".efeitoCarousel").mouseleave(function(){
        $(this).css("opacity", "0");
    });
});

/* FUNCTION MOUSEOVER CAROUSEL */

/* FUNCTION CAROUSEL */

$(document).ready(function(){
    $('.carousel').slick({
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 4,
        rows: 2,
    });
});

/* FUNCTION MOUSEOVER CAROUSEL */

/* SCROOL DA PÁGINA */

$(function(){
    $(".rolagem").click(function() {
    var href =$(this).attr("href");
    $("body, html").animate({
        scrollTop: $(href).offset().top
        }, 1000)
    });
});

/* SCROOL DA PÁGINA */


/* EFEITO GRAY CLIENTES */

$(document).ready(function(){
    $(".efeitoClientes").mouseenter(function(){
        $(this).css("filter", "none");
    });
    $(".efeitoClientes").mouseleave(function(){
        $(this).css("filter", "grayscale(100%)");
    });
});

/* EFEITO GRAY CLIENTES */