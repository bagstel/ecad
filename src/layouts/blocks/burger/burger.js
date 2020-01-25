$('document').ready(function () {
  let body = $('body'),
      trigger = $('#burger'),
      isClosed = false;

  trigger.click(() => burgerTime());

  function burgerTime () {
    if (isClosed === true) {
      trigger.removeClass('is-open');
      body.removeClass('popup-open');
      trigger.addClass('is-closed');
      isClosed = false;
    } else {
      trigger.removeClass('is-closed');
      body.addClass('popup-open');
      trigger.addClass('is-open');
      isClosed = true;
    }
  }
  // $(window).resize(function(e) {
  //   if (e.target.screen.width < 768) {
  //     trigger.removeClass('is-open');
  //   }
  // });
});
