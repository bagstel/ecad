$('document').ready(function () {
  let body = $('body');
  let trigger = $('.burger');
  let isClosed = false;

  trigger.click(() => burgerTime());

  function eventHandler ({ target }) {
    if ( target.closest('#fullpage')
      || target.closest('.header')
      || target.closest('.socials__link')
      || target.closest('.menu__link')) { closeIt(); }
  }

  function closeIt () {
    trigger.removeClass('is-open');
    body.removeClass('popup-open');
    trigger.addClass('is-closed');
    isClosed = false;
    $('.wrapper').off('click', eventHandler)
  }

  function openIt () {
    trigger.removeClass('is-closed');
    body.addClass('popup-open');
    trigger.addClass('is-open');
    isClosed = true;

    $('.wrapper').on('click', eventHandler)
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
