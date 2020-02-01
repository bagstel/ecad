$(document).ready(function($){
  $(".buttons__scroll-top").on("click", function (event) {
    event.preventDefault();

    $('body, html').animate({scrollTop: 0}, 1000);
  });
});
