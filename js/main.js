/*===== MENU SHOW ===== */
const showMenu = (toggleId, navId) => {
    const toggle = document.getElementById(toggleId),
        nav = document.getElementById(navId)

    if (toggle && nav) {
        toggle.addEventListener('click', () => {
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle', 'nav-menu')

/*===== ACTIVE AND REMOVE MENU =====*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction() {
    /*Active link*/
    navLink.forEach(n => n.classList.remove('active'));
    this.classList.add('active');

    /*Remove menu mobile*/
    const navMenu = document.getElementById('nav-menu')
    navMenu.classList.remove('show')

}
navLink.forEach(n => n.addEventListener('click', linkAction));

/* ver si funciona */
"use strict";

/*cruz menu */
$('#nav-toggle').click(function() {
    $('#nav-toggle-2').addClass('activo')
    $('#nav-toggle').addClass('oculto')
})
$('#nav-toggle-2').click(function() {
    $('#nav-toggle-2').removeClass('activo')
    $('#nav-toggle').removeClass('oculto')
    $('#nav-menu').removeClass('show')
})

// scroll menu
var sections = $('.section'),
    nav = $('.l-header'),
    nav_height = nav.outerHeight();

$(window).on('scroll', function() {
    var cur_pos = $(this).scrollTop();

    sections.each(function() {
        var top = $(this).offset().top - nav_height,
            bottom = top + $(this).outerHeight();

        if (cur_pos >= top && cur_pos <= bottom) {
            nav.find('a').removeClass('active');
            sections.removeClass('active');

            $(this).addClass('active');
            nav.find('a[href="#' + $(this).attr('id') + '"]').addClass('active');
        }
    });
});

nav.find('a').on('click', function() {
    var $el = $(this),
        id = $el.attr('href');

    $('html, body').animate({
        scrollTop: $(id).offset().top - nav_height + 1 /*2*/
    }, 300); /*600*/

    return false;
});




/*===== SCROLL REVEAL ANIMATION =====*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    /*2000*/
    reset: true
});

/*SCROLL HOME*/
sr.reveal('.home__title', {});
sr.reveal('.button', { delay: 200 }); /*200*/
sr.reveal('.home__img', { delay: 400 }); /*400*/
sr.reveal('.home__social-icon', { interval: 200 }); /*200*/

/*SCROLL ABOUT*/
sr.reveal('.about__img', {});
sr.reveal('.about__subtitle', { delay: 400 }); /*400*/
sr.reveal('.about__text', { delay: 400 }); /*400*/

/*SCROLL SKILLS*/
sr.reveal('.skills__subtitle', {});
sr.reveal('.skills__text', {});
sr.reveal('.skills__data', { interval: 200 }); /*200*/
sr.reveal('.skills__img', { delay: 600 }); /*600*/

/*SCROLL WORK*/
sr.reveal('.work__img', { interval: 200 }); /*200*/

/*SCROLL CONTACT*/
sr.reveal('.contact__input', { interval: 200 });

/*loader*/
// Loading page
$(function() {
    var goToTop = function() {

        $('.js-gotop').on('click', function(event) {

            event.preventDefault();

            $('html, body').animate({
                scrollTop: $('html').offset().top
            }, 500, 'easeInOutExpo');

            return false;
        });

        $(window).scroll(function() {

            var $win = $(window);
            if ($win.scrollTop() > 200) {
                $('.js-top').addClass('active');
            } else {
                $('.js-top').removeClass('active');
            }

        });

    };
    var loaderPage = function() {
        $(".loader").fadeOut(2200);
    };
    $(function() {
        goToTop();
        loaderPage();
    });
}());