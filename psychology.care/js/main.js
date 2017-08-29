$(document).ready(function () {

    $('.owl-carousel').owlCarousel({
        loop: true,
        nav: false,
        dots: false,
        items: 1,
        mouseDrag: true,
        touchDrag: true,
        autoplay: true,
        autoplayTimeout: 4000,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            }
        }
    })

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

        $('.nav__list li ul li').click(function () {
            $('#mainMenu').removeClass('active');
            $('.burger-menu').removeClass('menu-on');
            return false;
        });

    });
});
//    end of burger menu


