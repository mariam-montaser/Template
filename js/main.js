/*global $, alert, console*/

$(function () {

    'use strict';

    //triger nice scroll

    $('html').niceScroll({

        cursorcolor: "#dc4e41",
        cursorwidth: 10,
        cursorborderradius: 0,
        cursorborder: "1px solid #dc4e41"

    });

    //change header height

    $('header').height($(window).height());

    //header padding top

    $('header .intro').css('paddingTop', ($(window).height() - $('header .intro').height()) / 2);

    //scroll to features

    $('header .arrow').click(function () {

        $('html, body').animate({

            scrollTop: $('.features').offset().top

        }, 1000);

    });

    // show hidden items from works

    $('.our-works .container > button').click(function () {

        $('.our-works .hidden').fadeIn(1000);
        $(this).fadeOut(1000);

    });

    // check testimonials

    function checkClients() {

        var rightArrow = $('.testimonials .fa-chevron-right'),

            leftArrow = $('.testimonials .fa-chevron-left');

        if ($('.client:first').hasClass('active')) {

            leftArrow.fadeOut();

        } else {

            leftArrow.fadeIn();

        }

        if ($('.client:last').hasClass('active')) {

            rightArrow.fadeOut();

        } else {

            rightArrow.fadeIn();

        }

    }

    checkClients();

    $('.testimonials i').click(function () {

        if ($(this).hasClass('fa-chevron-right')) {

            $('.testimonials .active').fadeOut(100, function () {

                $(this).removeClass('active').next('.client').addClass('active').fadeIn(100);

                checkClients();

            });

        } else {

            $('.testimonials .active').fadeOut(100, function () {

                $(this).removeClass('active').prev('.client').addClass('active').fadeIn(100);

                checkClients();

            });
        }

    });


});









