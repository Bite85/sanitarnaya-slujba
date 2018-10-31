$(document).ready(function() {

  /*******MENU BURGER******/
   var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

    var hamburgers = document.querySelectorAll(".hamburger");
    if (hamburgers.length > 0) {
      forEach(hamburgers, function(hamburger) {
        hamburger.addEventListener("click", function() {
          this.classList.toggle("is-active");
        }, false);
      });
    } 
  /*******MENU BURGER******/


 /******CLICK OUTSIDE MENU*******/ 
 $(document).click(function (event) {
    var clickover = $(event.target);
    var _opened = $(".navbar-collapse").hasClass("show");
    if (_opened === true && !clickover.hasClass("navbar-toggle")) {
        $("button.navbar-toggle").click();
        console.log('ok');
        $('.navbar-toggler').addClass('collapsed');
        $('.navbar-collapse').removeClass('show');
        $('.navbar-toggler').removeClass('is-active');
    }
});
 /******CLICK OUTSIDE MENU*******/ 



/**********SCROLL TO**************/ 
function getSection(e) {
    e.preventDefault();

    var id = $(this).attr('href');
    $.scrollTo(id, {
         duration: 400,
         axis: 'y',
         offset: { top: -50, left: 0 }
    });

    $('.navbar-toggler').addClass('collapsed');
    $('.navbar-collapse').removeClass('show');
    $('.navbar-toggler').removeClass('is-active');
}
$('.navigation a').bind('click', getSection);


var sections = $('section')
  , nav = $('.navigation')
  , nav_height = nav.outerHeight();

$(window).scroll(function(){


    if ($(window).scrollTop() > 100) {
        $('.navbar').addClass('fixed-top');
         $('.header-section__logo-small').addClass('d-block');
    } else {
        $('.navbar').removeClass('fixed-top');
        $('.header-section__logo-small').removeClass('d-block');
    }

     var cur_pos = $(this).scrollTop();

    sections.each(function() {
    var top = $(this).offset().top - 50,
        bottom = top + $(this).outerHeight();
 
    if (cur_pos >= top && cur_pos <= bottom) {
      nav.find('a').removeClass('active');
      // sections.removeClass('active');
 
      // $(this).addClass('active');
      nav.find('a[href="#'+$(this).attr('id')+'"]').addClass('active');
    }

    });

}); 

if ($(window).scrollTop() > 100) {
    $('.navbar').addClass('fixed-top');
    $('.header-section__logo-small').addClass('d-block');
} else {
    $('.navbar').removeClass('fixed-top');
    $('.header-section__logo-small').removeClass('d-block');
}


/**********SCROLL TO**************/ 

/*********ZOOM IMAGE*************/
$('[data-fancybox]').fancybox({
    loop: true,
    toolbar: false,
    thumbs: false
});
/*********ZOOM IMAGE*************/

});

/***********MAP**************/
ymaps.ready(function () {


    if($('#YMapsID').length > 0) {
      
          var myMap = new ymaps.Map('YMapsID', {
                center: [51.536582,46.021285],
                zoom: 16,
                controls: ['zoomControl','geolocationControl']
            }, {
                searchControlProvider: 'yandex#search'
            });

            // Создаём макет содержимого.
         var myPlacemark = new ymaps.Placemark([51.536582,46.021285], {
                balloonContent: `<div class="placemark-text">
                                 <p>г. Саратов, ул. Им. Балалайкина, д.А</p> 
                                 <p class="placemark-phone">+7 (123) 123 12 12</p>
                                 <p class="placemark-email"><a href="mailto:example@example.com">example@example.com</a></p>
                                 </div>`,
            }, 
            {
                // Опции.
                // Необходимо указать данный тип макета.
                iconLayout: 'default#image',
                // Своё изображение иконки метки.
                iconImageHref: './img/placemark.png',
                // Размеры метки.
                // iconImageSize: [35, 38]
                iconImageSize: [50, 65]
             
            });

       
        myMap.behaviors.disable('scrollZoom');
        // myMap.behaviors.disable('multiTouch'); 
        ($(window).width() < 991) ?  myMap.behaviors.disable('drag') : myMap.behaviors.Drag;
       
        myMap.geoObjects.add(myPlacemark);
        // myPlacemark.balloon.open();
    }
      
        
});
/***********MAP**************/ 
