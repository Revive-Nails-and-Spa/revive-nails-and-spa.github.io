(function($) {
    'use strict';
 
    /* Handle Calendly form
    ----------------------------------------------*/
    $('#calendly-form').on("submit", function(event) {
        event.preventDefault();
        Calendly.initPopupWidget({url: 'https://calendly.com/lancenewby/booking?text_color=607676&primary_color=29b2b2&'+$( this ).serialize().replace(/\+/g,'%20').replace(/&a1=/g, '&a1=1')});
        
        return false;
    });

    /* Hide menu after click
    ----------------------------------------------*/
    $('.navbar-nav li a').click(function(event) {
        $('.in').collapse('hide');
    });

    /* Smooth scroll to section
    ----------------------------------------------*/
    $('a.scroll[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') || location.hostname == this.hostname) {

            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top-70
                }, 2000);
                return false;
            }
        }
    });

    /* Team slideshow
    ----------------------------------------------*/
    $("#team-carousel").owlCarousel({
 
        autoPlay: 5000, //Set AutoPlay to 5 seconds

        items : 4,
        itemsDesktopSmall : [979,3],
        stopOnHover: true
 
    });

    /* Testimonials slideshow
    ----------------------------------------------*/
    $("#testimonial-carousel").owlCarousel({
 
        autoPlay: 6000, //Set AutoPlay to 6 seconds
 
        singleItem: true,
        pagination : false
 
    });

    /* Tooltip
    ----------------------------------------------*/
    $('[data-toggle="tooltip"]').tooltip();

    /* Lightbox
    ----------------------------------------------*/
    $('.image-link').magnificPopup({
        type:'image'
    });

    /* Google map
    ----------------------------------------------*/
    $(".map").each(function(){
            
        var data_zoom = 17;
        
        if ($(this).attr("data-zoom") !== undefined) {
            data_zoom = parseInt($(this).attr("data-zoom"),10);
        }   
        
        $(this).gmap3({
            marker: {
                values: [{
                    address: $(this).attr("data-address"),
                }],
                options:{
                    draggable: false
                },
                events:{
                    click: function(marker, event, context){
                        var map = $(this).gmap3("get"),
                        infowindow = $(this).gmap3({get:{name:"infowindow"}});
                        if (infowindow){
                            infowindow.open(map, marker);
                            infowindow.setContent(context.data);
                        } else {
                            $(this).gmap3({
                                infowindow:{
                                    anchor:marker, 
                                    options:{content: context.data}
                                }
                            });
                        }
                    }
                }
            },
            map: {
                options: {
                    mapTypeId: google.maps.MapTypeId.ROADMAP,
                    zoom: data_zoom,
                    scrollwheel: false
                }
            }
        });
        
    });
          
})(jQuery);

