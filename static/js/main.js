$(document).ready(function () {


    $('.item__likes div').click(function () {
        if( $(this).hasClass('like_active') ){
            $(this).removeClass('like_active')
        }else{
            $(this).parent().find('div').removeClass('like_active')
            $(this).toggleClass('like_active')
        }
    })

    
    $(`.help-switch__block`).hide()
    $(`.help-switch__block_${$('.switch-block__item_active').index() + 1}`).show()


    $('.switch-block .switch-block__item').click(function () {
        $('.switch-block .switch-block__item').removeClass('switch-block__item_active')
        $(this).addClass('switch-block__item_active')

        console.log($(`.help-switch__block_${$(this).index() + 1}`).show())
        $(`.help-switch__block`).hide()
        $(`.help-switch__block_${$(this).index() + 1}`).show()
    })


    $('.header__burger').click(function () {
        $('.navbar-nav').slideToggle(200)
    })

    $('.punk-mob__item-sort').click(function () {
        $('.cd-tab-filter ul').toggle()
        $('.cd-filter').hide()
    })
    $('.punk-mob__item-filter').click(function () {
        $('.cd-tab-filter ul').hide()
        $('.cd-filter').toggle()
    })


    let heightSlider = 162;
    let heightBlock = $('.slider__block').height()

    $('.slider__more').click(function () {
        heightSlider += 162;

        if( heightBlock <= heightSlider ){
            $('.about__slider').height('100%')
            $(this).hide()
        }else
            $('.about__slider').height(heightSlider)
    })

    var btn = $('#totopbutton, #totopbutton-footer');

      $(window).scroll(function() {
        if ($(window).scrollTop() > 300) {
          btn.addClass('show');
        } else {
          btn.removeClass('show');
        }
      });

      btn.on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({scrollTop:0}, '300');
      });

      $('.courses-carousel a').each(function () {
          if( $(this).index() >= 20 ){
            $(this).hide()
          }
      })

      $('.show__all').click(function () {
          $('.courses-carousel a').show()
          $(this).hide()
      })

      $('#slider1').slick({
        infinite: false,
        slidesToShow: 4,
        arrows: false,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    centerPadding: '40px',
                    arrows: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '40px',
                    arrows: true
                }
            }
        ]
      })


      $('#slider2').slick({
        infinite: false,
        arrows: false,
        slidesToShow: 5,
        swipeToSlide: true,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    centerMode: true,
                    centerPadding: '40px',
                    arrows: true
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,
                    centerPadding: '40px',
                    arrows: true
                }
            }
        ]
      })


      $('.header-search a').click(function (e) {
          $(this).parent().find('input').toggleClass('inp-open')
      })

      $('.details-item summary, .details-item1 summary').click(function () {
          $(this).parent().find('.faq__content').slideToggle(200)
          $(this).toggleClass('op')
      })

      $('.item__text').each(function () {
          if( $(this).height() >= 200 ){
            $(this).addClass('item__text_big')
          }
      })

      setTimeout(function () {
          $('.course-boxes ul').height('100%')
      }, 1000)


      $('.item__cover').click(function () {
          $(this).parent().find('.item__text').toggleClass('item__text_open')
          $(this).text() == 'Свернуть' ? $(this).text('Развернуть') : $(this).text('Свернуть');
      })



      $('.rht__reviews .rht__item').each(function () {
            if( $(this).index() >=10 ){
                $(this).hide()
            }
        })

      let mbf = 10;
        $('.review__more').click(function () {
            mbf += 10;
            $('.rht__reviews .rht__item').each(function () {
                if( $(this).index() <= mbf){
                    $(this).show()
                }
            })
            if( $('.rht__reviews .rht__item').length <= mbf ){
                $(this).hide()
            }
        })


      if( $(window).width() < 576 ){
        $('.cd-gallery li').each(function () {
            if( $(this).index() >=10 ){
                $(this).hide()
            }
        })

        let mro = 10;
        $('.more-courses').click(function () {
            mro += 10;
            $('.cd-gallery li').each(function () {
                if( $(this).index() <= mro){
                    $(this).show()
                }
            })
            if( $('.cd-gallery li').length <= mro ){
                $(this).hide()
            }
        })
      }

})


jQuery(document).ready(function($) {

    $('#slider').slickFilterable({

        filterName: 'filter-heading',

      filter: function( category, slider, settings ) {

        return $(this).hasClass( category );

      },

        slick: {

            rows: 1,

            dots: false,

            arrows: false,

            slidesPerRow: 4,

            slidesToScroll: 1

        }

    });

});



(function( $ ) {

    $.fn.slickFilterable = function( options ) {



        /**

         * A plugin to create a slick we can filter.

         *

         * If you are not using Rows you can use slickFilter

         * (check documentation) otherwise we can provide a valid filter.

         *

         * options {

         *      slideSelector    string     jQuery selector to get slides. Imetiate children by default.

         *      filterName       string     We will search for data-{filterName} clickable elements.

         *      slick            object     The slick settings. Check Slick doc.

         *      beforeFilter     function   A fuction called before filter slider. Receives the trigger element

         *                                  as this and 3 params: category (string), slider and slides (jQuery objects).

         *      filter           mix        A valid parameter to jQuery filter() function. If it's a functio we will wrap

         *                                  it and it receives the trigger element as this and 3 params: category (string),

         *                                  slider (jQuery object) and a copy of settings (extended).

         * }

         */

        var settings = $.extend({

            slideSelector: '> *',

            filterName: 'filter-slick',

            slick: {},

            beforeFilter: function() {},

            filter: function( element, category, slider, settings ) { return true; },

        }, options );



        return this.each(function() {

            var slider = $(this),

                slides = slider.find( settings.slideSelector ),

                slickObj;



            /**

             * Create Slick

             *

             * TIP: you should you 'slidesPerRow' instead 'slidesToShow' in grid mode (with rows)

             * to avoid slick break layout when there are less slides than on "page".

             */

            slickObj = slider.slick( settings.slick );



            // Handle Filter Click

            $('[data-' + settings.filterName + ']').on('click', function(event) {

                event.preventDefault();



                var category = $(this).data(settings.filterName),

                    newSlides = $.extend(true, {}, slides),

                    newSlickOptions;



                if ( ! category ) return;



                // Before Filter Slides

                if ( typeof settings.beforeFilter == 'function' ) {

                    settings.beforeFilter.call(this, category, slider, slides);

                }



                // Destroy and empty

                slider.slick('unslick');



                // Recreate All Slides

                if ( category === 'all' ) {

                    slider.find( settings.slideSelector ).remove();

                    slider.append( newSlides );

                    slider.slick( settings.slick );



                    return;

                }



                /**

                 * Filter Slides

                 *

                 * If settings.filter is a function we pass the category, slider and a copy of settings

                 * expecting a true or false return to pass it to jQuery.filter();

                 *

                 * If not, we just pass it directly.

                 */

                if ( typeof settings.filter !== 'function' ) {

                    newSlides = newSlides.filter( settings.filter );

                } else {

                    newSlides = newSlides.filter( function() {

                        return settings.filter.call( this, category, slider, $.extend( true, {}, settings ) );

                    } );

                }



                slider.find( settings.slideSelector ).remove();

                slider.append( newSlides );

                slider.slick( settings.slick );

            });

        });

    };

}(jQuery));