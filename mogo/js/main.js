$(document).ready(function () {

    ///    burger menu
    $(function () {
        $(".burger-menu").click(function () {
            $(this).toggleClass("menu-on");
            $('#mainMenu').toggleClass('active');
            return false;
        });

        $(document).click(function (event) {
            if ($(event.target).closest(".burger-menu").length) return;
            if ($(event.target).closest("#mainMenu").length) return;
            $('#mainMenu').removeClass('active');
            $('.burger-menu').removeClass('menu-on');
            event.stopPropagation();
        });

        $('.nav__list li').click(function () {
            $('#mainMenu').removeClass('active');
            $('.burger-menu').removeClass('menu-on');
            return false;
        });
    });
//    end of burger menu

//    search
    $(function () {
        $("#search__button").click(function () {
            $(".nav__search-input").toggleClass("search-on");
            $(".header__wrap").toggleClass("search__active");
            $('#mainMenu').removeClass('active');
            $('.burger-menu').removeClass('menu-on');
            return false;
        });

        $(document).click(function (event) {
            if ($(event.target).closest(".nav__search-input").length) return;
            $('.nav__search-input').removeClass('search-on');
            $(".header__wrap").removeClass("search__active");
            event.stopPropagation();
        });

        $('.nav__list li').click(function () {
            $('.nav__search-input').removeClass('search-on');
            $(".header__wrap").removeClass("search__active");
            return false;
        });

        $('.burger-menu').click(function () {
            $('.nav__search-input').removeClass('search-on');
            $(".header__wrap").removeClass("search__active");
            return false;
        });
    });
    //  end of search

    // Smooth scroll on menu click
    $(function () {
        $('.nav__list a, .intro__link a, .intro__list-item a, .header__logo a').click(function (event) {
            event.preventDefault();
            var href = $(this).attr('href');
            var target = $(href);
            var top = target.offset().top;
            $('html,body').animate({
                scrollTop: top
            }, 1200);
        });
    });

    // Smooth scroll to top from footer logo
    $(function () {
        $('.cotacts__info-logo a').click(function (event) {
            event.preventDefault();
            var href = $(this).attr('href');
            var target = $(href);
            var top = target.offset().top;
            $('html,body').animate({
                scrollTop: top
            }, 1200);
        });
    });



    //accordion
    $('.collapse.in').prev('.panel-heading').addClass('active');
    $('#accordion, #bs-collapse')
        .on('show.bs.collapse', function (a) {
            $(a.target).prev('.panel-heading').addClass('active');
        })
        .on('hide.bs.collapse', function (a) {
            $(a.target).prev('.panel-heading').removeClass('active');
        });

    // feedback carousel time sliding in ms

    $('#quote-carousel').carousel({
        pauseOnHover: true,
        interval: 2000,
    });

    // second feedback carousel

    $('#work-quote-carousel').carousel({
        pauseOnHover: true,
        interval: 2000,
    });

    // labels carousel (owl carousel)
    initOvlSlider();

    function initOvlSlider() {

        $('.owl-carousel').owlCarousel({
            loop: true,
            margin: 10,
            nav: false,
            dots: false,
            items: 1,
            mouseDrag: true,
            touchDrag: true,
            autoplay: true,
            autoplayTimeout: 2000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                320: {
                    items: 2
                },
                360: {
                    items: 3
                },
                480: {
                    items: 4
                },
                768: {
                    items: 4
                },
                992: {
                    items: 6
                }
            }
        })
    }



    //map

    //open map
    $(function () {
        $("#map__cover").click(function () {
            $(".map__cover-pointer").toggleClass("map__cover-pointer-hide");
            initGoogleMap();
            return false;
        });
    });
    //center, pointer, position, zoom
    function initGoogleMap() {
        if (typeof(google) != 'undefined') {
            var map = new google.maps.Map(document.getElementById('googleMap'), {
                center: {lat: 37.774005, lng: -122.416438},
                disableDefaultUI: true,
                scrollwheel: false,
                zoom: 12,
                disableDefaultUI: false
            });
            var myLatlng = {lat: 37.774005, lng: -122.416438};
            var marker = new google.maps.Marker({
                position: myLatlng,
                map: map,
                title: "РњРё С‚СѓС‚"
            });
            $('#goToLocationGoogleMaps , #footerGoToLocationGoogleMaps').click(function () {
                var body = $("html, body");
                var currentHeigt = $('#googleMap').offset();
                body.stop().animate({scrollTop: (currentHeigt.top - headerHeight)}, '750', 'swing');
                var currentPosition = {
                    lat: 37.774005,
                    lng: -122.416438
                };
                map.setZoom(12);
                map.setCenter(currentPosition);
            });
        }
    }



});