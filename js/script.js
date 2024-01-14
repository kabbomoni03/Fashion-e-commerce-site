let searchFrom = document.querySelector('.search-form');

document.querySelector('#search-btn').onclick = ()=>{
    searchFrom.classList.toggle('active')
    navbar.classList.remove('active')
    shoppingCart.classList.remove('active')
    loginForm.classList.remove('active')

}
let shoppingCart= document.querySelector('.shopping-cart');

document.querySelector('#cart-btn').onclick = ()=>{
    shoppingCart.classList.toggle('active')
    navbar.classList.remove('active')
    searchFrom.classList.remove('active')
    loginForm.classList.remove('active')

}
let loginForm= document.querySelector('.login-form');

document.querySelector('#login-btn').onclick = ()=>{
    loginForm.classList.toggle('active')
    navbar.classList.remove('active')
    searchFrom.classList.remove('active')
    shoppingCart.classList.remove('active')


}
let navbar= document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = ()=>{
    navbar.classList.toggle('active')
    searchFrom.classList.remove('active')
    shoppingCart.classList.remove('active')
    loginForm.classList.remove('active')

}
window.onscroll = ()=>{
    navbar.classList.remove('active')
    searchFrom.classList.remove('active')
    shoppingCart.classList.remove('active')
    loginForm.classList.remove('active')

}









$('.Trending-slide').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows:false,
    centerMode:true,
    centerPadding:'0px'
});




$(window).on('load', function () {
    $(".loader").fadeOut();
    $("#preloder").delay(200).fadeOut("slow");

    /*------------------
        Gallery filter
    --------------------*/
    $('.filter__controls li').on('click', function () {
        $('.filter__controls li').removeClass('active');
        $(this).addClass('active');
    });
    if ($('.product__filter').length > 0) {
        var containerEl = document.querySelector('.product__filter');
        var mixer = mixitup(containerEl);
    }
});



/*------------------
    CountDown
--------------------*/
// For demo preview start
var today = new Date();
var dd = String(today.getDate()).padStart(2, '0');
var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
var yyyy = today.getFullYear();

if(mm == 12) {
    mm = '01';
    yyyy = yyyy + 1;
} else {
    mm = parseInt(mm) + 1;
    mm = String(mm).padStart(2, '0');
}
var timerdate = mm + '/' + dd + '/' + yyyy;
// For demo preview end


// Uncomment below and use your date //

/* var timerdate = "2020/12/30" */

$("#countdown").countdown(timerdate, function (event) {
    $(this).html(event.strftime("<div class='cd-item'><span>%D</span> <p>Days</p> </div>" + "<div class='cd-item'><span>%H</span> <p>Hours</p> </div>" + "<div class='cd-item'><span>%M</span> <p>Minutes</p> </div>" + "<div class='cd-item'><span>%S</span> <p>Seconds</p> </div>"));
});