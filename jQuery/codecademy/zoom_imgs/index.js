$(document).ready(() => {
    $(".login-button").on("click", () => {
        $(".login-form").toggle();
    });

    $('.menu-button').on('click', () => {
        $('.nav-menu').toggleClass('hide');
        $('.menu-button').toggleClass('button-active');
    });

    $('.product-photo').on('mouseenter', event => {
        $(event.currentTarget).addClass('photo-active');
    }).on('mouseleave', event => {
        $(event.currentTarget).removeClass('photo-active');
    });

    //Shoes details
    $('.more-details-button').on('click', event => {
        $(event.currentTarget).closest('.product-details').next().toggle();

        $(event.currentTarget).find('img').toggleClass('rotate');
    });

    $('.shoe-details li').on('click', event => {
        $(event.currentTarget).addClass('active');

        $(event.currentTarget).siblings().removeClass('active');

        $(event.currentTarget).closest('.shoe-details').children().removeClass('disabled');
    });
});
