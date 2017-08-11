//on load
$(window).on('load', function () {
    initVideoBackground();
    initOvlSlider();

    //smooth scroll from footer to top
    $(function() {

        $('#up').click(function() {
            $('html, body').animate({scrollTop: 0},1000);
            return false;
        })

    });
});

//on resize
$(window).resize(function () {
    initVideoBackground();
});

//reinit video
function initVideoBackground(){
    var divVideoWrap = $('#video__wrap ');
    if ($(this).width() <= 768)
    {
        divVideoWrap.empty();
    } else {
        divVideoWrap.empty();
        divVideoWrap.append('<video poster="https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/polina.jpg" id="bgvid" playsinline autoplay muted loop>  <source src="http://thenewcode.com/assets/videos/polina.webm" type="video/webm">  <source src="http://thenewcode.com/assets/videos/polina.mp4" type="video/mp4">  </video>');
    }
    initPauseButton();
}

//init pause button
function initPauseButton(){
    var vid = document.getElementById("bgvid");
    var pauseButton = document.querySelector("#vid__controls button");
    pauseButton.addEventListener("click", function () {
        vid.classList.toggle("stopfade");
        if (vid.paused) {
            vid.play();
            pauseButton.innerHTML = '<i class="fa fa-pause-circle" aria-hidden="true"></i>';
        } else {
            vid.pause();
            pauseButton.innerHTML = '<i class="fa fa-play-circle" aria-hidden="true"></i>';
        }
    });
}

//adding video class stop fade
function vidFade() {
    var vid = document.getElementById("bgvid");
    vid.classList.add("stopfade");
}


//init all sliders
function initOvlSlider(){
    //owl carousel 1
    $(document).ready(function () {
        $('#owl-one').owlCarousel({
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
                768: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        })
    });

    //owl carousel 2
    $(document).ready(function () {
        $('#owl-two').owlCarousel({
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
                    items: 2
                },
                480: {
                    items: 3
                },
                1200: {
                    items: 5
                }
            }
        })
    });
}




