$('document').ready(function () {
  let body = $('body'),
      trigger = $('.burger'),
      isClosed = false;

  // console.log(trigger);
  trigger.click(() => burgerTime());

  function closeIt () {
    trigger.removeClass('is-open');
    body.removeClass('popup-open');
    trigger.addClass('is-closed');
    isClosed = false;
  }

  function openIt () {
    trigger.removeClass('is-closed');
    body.addClass('popup-open');
    trigger.addClass('is-open');
    isClosed = true;

    $('.root-container').one('click', closeIt);
    $('.socials__link').one('click', closeIt);
  }

  function burgerTime () {
    (isClosed === true) ? closeIt() : openIt();
  }

  // $(window).resize(function(e) {
  //   if (e.target.screen.width < 768) {
  //     trigger.removeClass('is-open');
  //   }
  // });
});
