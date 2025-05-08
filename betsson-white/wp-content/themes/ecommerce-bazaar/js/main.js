// Menu
function ecommerce_bazaar_openNav() {
  jQuery(".sidenav").addClass('show');
}
function ecommerce_bazaar_closeNav() {
  jQuery(".sidenav").removeClass('show');
}

( function( window, document ) {
  function ecommerce_bazaar_keepFocusInMenu() {
    document.addEventListener( 'keydown', function( e ) {
      const ecommerce_bazaar_nav = document.querySelector( '.sidenav' );

      if ( ! ecommerce_bazaar_nav || ! ecommerce_bazaar_nav.classList.contains( 'show' ) ) {
        return;
      }
      const elements = [...ecommerce_bazaar_nav.querySelectorAll( 'input, a, button' )],
        ecommerce_bazaar_lastEl = elements[ elements.length - 1 ],
        ecommerce_bazaar_firstEl = elements[0],
        ecommerce_bazaar_activeEl = document.activeElement,
        tabKey = e.keyCode === 9,
        shiftKey = e.shiftKey;

      if ( ! shiftKey && tabKey && ecommerce_bazaar_lastEl === ecommerce_bazaar_activeEl ) {
        e.preventDefault();
        ecommerce_bazaar_firstEl.focus();
      }

      if ( shiftKey && tabKey && ecommerce_bazaar_firstEl === ecommerce_bazaar_activeEl ) {
        e.preventDefault();
        ecommerce_bazaar_lastEl.focus();
      }
    } );
  }
  ecommerce_bazaar_keepFocusInMenu();
} )( window, document );

(function ($) {

    $(window).load(function () {
        $("#pre-loader").delay(500).fadeOut();
        $(".loader-wrapper").delay(1000).fadeOut("slow");

    });

    $(document).ready(function () {

        /*-- tooltip --*/
        $('[data-toggle="tooltip"]').tooltip();

        /*-- Button Up --*/
        var btnUp = $('<div/>', { 'class': 'btntoTop' });
        btnUp.appendTo('body');
        $(document).on('click', '.btntoTop', function (e) {
            e.preventDefault();
            $('html, body').animate({
                scrollTop: 0
            }, 700);
        });

        $(window).on('scroll', function () {
            if ($(this).scrollTop() > 200)
                $('.btntoTop').addClass('active');
            else
                $('.btntoTop').removeClass('active');
        });

        /*-- Reload page when width is between 320 and 768px and only from desktop */
        var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
        $(window).on('resize', function () {
            var win = $(this); //this = window
            if (win.width() > 320 && win.width() < 991 && isMobile == false && !$("body").hasClass("elementor-editor-active")) {
                location.reload();
            }
        });
    });

})(this.jQuery);

jQuery('document').ready(function(){
  var owl = jQuery('.product-box .owl-carousel');
    owl.owlCarousel({
    margin:30,
    nav: true,
    autoplay :true,
    lazyLoad: true,
    autoplayTimeout: 9000,
    loop: true,
    dots:false,
    navText : ['<i class="bi bi-chevron-left"></i>', '<i class="bi bi-chevron-right"></i>'],
    responsive: {
      0: {
        items: 1
      },
      576: {
        items: 1
      },
      768: {
        items: 3
      },
      1000: {
        items: 4
      }
    },
    autoplayHoverPause : true,
    mouseDrag: true
  });
});

// custom-header-text
(function( $ ) {
    // Update site title and description color in real-time
    wp.customize( 'header_textcolor', function( value ) {
        value.bind( function( newval ) {
            if ( 'blank' === newval ) {
                $( 'header.style1 .logo h1.site-title a, header.style1 .logo p.site-description' ).css({
                    'clip': 'rect(1px, 1px, 1px, 1px)',
                    'position': 'absolute'
                });
            } else {
                $( 'header.style1 .logo h1.site-title a, header.style1 .logo p.site-description' ).css({
                    'clip': 'auto',
                    'position': 'relative',
                    'color': newval
                });
            }
        });
    });
})( jQuery );