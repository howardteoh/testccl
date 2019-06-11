// loading screen function
$(window).on("load", function () {
    $('.loading').fadeOut("slow");
});

$('#back_to_top').click(function () {
    $('body,html').animate({
        scrollTop: 0
    }, 800);
    return false;
});

// scrolling and menu function
$(window).on('scroll', function () {
    if ($(window).scrollTop()) {
        if ($(this).scrollTop() > 50) {
            $('#back_to_top').fadeIn();
        } else {
            $('#back_to_top').fadeOut();
        }
        $('header').addClass('sticky');
    }
    else {
        $('header').removeClass('sticky');
    }
});

$(document).ready(function () {
    // target scrolling function
    $('a._pointer').on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {
                window.location.hash = hash;
            });
        }
    });

    // card flipping function
    var card = document.querySelector('.card_layout');
    card.addEventListener('click', function () {
        card.classList.toggle('is_flipped');
    }); 
});



//$(document).ready(function () {
//    // Add scrollspy to <body>
//    $('body').scrollspy({ target: ".navbar", offset: 50 });

//    // Add smooth scrolling on all links inside the navbar
//    $('a._section').on('click', function (event) {
//        // Make sure this.hash has a value before overriding default behavior
//        if (this.hash !== "") {
//            // Prevent default anchor click behavior
//            event.preventDefault();

//            // Store hash
//            var hash = this.hash;

//            // Using jQuery's animate() method to add smooth page scroll
//            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
//            $('html, body').animate({
//                scrollTop: $(hash).offset().top
//            }, 800, function () {

//                // Add hash (#) to URL when done scrolling (default click behavior)
//                window.location.hash = hash;
//            });
//        }  // End if
//    });
//});
