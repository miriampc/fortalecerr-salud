$(document).ready(function () {
    //Ejecuta funciones con data dinamica
    MedioAmbiente();
    CadenaValor();
    Reconocimientos();

    //match media for carousels    
    if (window.matchMedia("(max-width: 1049px)").matches) {
        addCarousel('voluntariado-carousel',1,2);
        addCarousel('gestion-carousel',2,3);
        addCarousel('educacion-carousel',1,2);
        addCarousel('estrategias-carousel',1,2);
        addCarousel('reconocimientos-carousel',1,2);
        addCarousel('proveedores-carousel',1,2);
    }else {
        $('#voluntariado-carousel').removeClass('owl-carousel owl-theme');
        $('#gestion-carousel').removeClass('owl-carousel owl-theme');
        $('#educacion-carousel').removeClass('owl-carousel owl-theme');
        $('#estrategias-carousel').removeClass('owl-carousel owl-theme');
        $('#reconocimientos-carousel').removeClass('owl-carousel owl-theme');
        $('#proveedores-carousel').removeClass('owl-carousel owl-theme');
    }
    function addCarousel(element, mobItems, tabletItems) {
        $("#"+element).owlCarousel({
            loop: true,
            margin: 16,
            nav: false,
            responsive: {
                0: {
                    items: mobItems
                },
                590: {
                    items: tabletItems,
                    margin: 24
                },
                1050: {
                    items: 3,
                    margin: 20,
                    mouseDrag: false
                }
            }
        });
    }
    //Voluntariado Section
    $('.voluntariado-d .right .item').click(function(e){
        if (!$(this).hasClass("active")) {
            $('.voluntariado-d .right .item').removeClass("active");
            $(this).addClass("active");
        }
        else {
            $(this).removeClass("active");
        }
    })
    
    //Menu dropdown
    $(".menu__dropdown--item").click(function (e) {
        if (!$(this).hasClass("active")) {
            $('.menu__dropdown--item').find('.menu__dropdown--body').slideUp("slow");
            $('.menu__dropdown--item').removeClass("active");
            $(this).find('.menu__dropdown--body').slideDown("slow");
            $(this).addClass("active");
        }
        else {
            $(this).find('.menu__dropdown--body').slideUp("slow");
            $(this).removeClass("active");
        }
    })

    //Menu desktop
    $("#btnNuestrosSeguros").click(function () {
        $("#menuDesktop").slideToggle("fast");
        $(this).toggleClass("toggle");
        $('#overlay').toggleClass("active");
    })

    //Menu fixed
    window.addEventListener('scroll', function () {
        var lastScrollTop = 10;
        var currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        if (currentScroll > lastScrollTop) {
            $('.banner__img img').css('z-index','1');
            $("header, #nuestrosSeguros").addClass("active");
            if ($("#overlay").hasClass("active")) {
                $('#overlay').removeClass("active");
                $("#menuDesktop").slideToggle("fast");
            }
        } else {
            $('.banner__img img').css('z-index','5');
            $("header, #nuestrosSeguros").removeClass("active");
        }

        if (window.matchMedia("(min-width: 1050px)").matches) {            
            if (currentScroll > 900) {
                $('#anuncio').css('display', 'none');

            } else {
                $('#anuncio').css('display', 'block');

            }
        }
        lastScrollTop = currentScroll;
    });

    $('#overlay').click(function () {
        $(this).toggleClass("active");
        $("#menuDesktop").slideToggle("fast");
    })

    //Menu mobile
    $("#menuOpen, #menuClose").click(function () {
        $("#menuMobile, body").toggleClass("active");
    })

    //Education section
    var cardH = $('.yomecuido__right').outerHeight();
    $('.yomecuido__left img').css('height',cardH);

    //Voluntariado section
    var itemH = $('.voluntariado-d .left img').outerHeight();
    $('.voluntariado-d .right').css('height',itemH);

    $(window).resize(function () {
        nuestrosSeguros();
        var cardH = $('.yomecuido__right').outerHeight();
        $('.yomecuido__left img').css('height',cardH);
    });
    nuestrosSeguros();
    function nuestrosSeguros() {
        var width = (window.innerWidth - 1240) / 2 + 200;
        $("#nuestrosSeguros").css("left", width);
    }

    // Modal Términos
    $('#tyc').click(function(){
        $('#modal').addClass('open');
    })
    $('.close').click(function(){
        $('#modal').removeClass('open');
    })
});
