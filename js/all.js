$(document).ready(function () {
    // switch navbar
    $('.hamburger').click(function () {
        $(this).toggleClass('active');
        $('body').find('.navbar').toggleClass('open')
    });
    // nav scroll 
    $('.nav-link').click(function (e) {
        e.preventDefault;
        const target = $(this).attr('href')
        const tagetPos = $(target).offset().top-84;
        $('html,body').animate({ scrollTop: tagetPos }, 1000);
        // 
        $('body').find('.navbar').removeClass('open');
        $('body').find('.hamburger').removeClass('active');
    });
    // switch more info
    $('.more-info').click(function (e) {
        e.preventDefault();
        $(this).toggleClass('active');
        $(this).parent().parent().find('.info-content').slideToggle(800);
    })
    //folio hover
    $('.folio-card').hover(function () {
        // hover
        $(this).addClass('hover');
        $(this).find('.folio-img').addClass('hover');
        $(this).find('.folio-title').addClass('hover');
    }, function () {
        // out
        $(this).removeClass('hover');
        $(this).find('.folio-img').removeClass('hover');
        $(this).find('.folio-title').removeClass('hover')
    }
    );
});

