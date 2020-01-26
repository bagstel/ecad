$(document).ready(function($){
  $(".wrapper").on("click", "a.anchor", function (event) {
    event.preventDefault();

    let id  = $(this).attr('href');
    let top = $(id).offset().top;

    $('body, html').animate({scrollTop: top}, 1000);
  });
});
