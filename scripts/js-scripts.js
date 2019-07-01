function myFunction(x) {
    x.classList.toggle("change");
};

$(document).ready(function(){
    $(".menu__btn").click(function(){
        $('.header-menu').toggleClass("header-menu_active");
        $('html, body').toggleClass("overflow_delete");
        })
    });

$(document).ready(function(){
    $('.nav__link').click(function(){
        $('.header-menu').removeClass('header-menu_active');
        $('html, body').removeClass("overflow_delete");
        $('.menu__btn').removeClass('change');
    });
});
