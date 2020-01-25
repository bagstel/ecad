$(document).ready(function($){
  $(".wrapper").on("click", "a", function (event) {
    event.preventDefault();
    console.log('click');

    let id  = $(this).attr('href');
    let top = $(id).offset().top;

    $('body,html').animate({scrollTop: top}, 1000);
  });
});
