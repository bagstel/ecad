import './main.scss';

if (process.env.NODE_ENV === 'development') {
  require('file-loader!./views/faq.pug');
  require('file-loader!./views/main.pug');
}

// import './scripts/scroll';
import './scripts/feedback';
import './scripts/anim';
import './layouts/blocks/burger/burger';

$(document).ready(function () {
  let menus = [...document.querySelectorAll('.menu .menu__list')];
  menus = menus.map(menu => [...menu.children]);

  $('#fullpage').fullpage({
    menu: '#menu',
    anchors: ['home', 'about', 'apps', 'contacts'],
    scrollOverflow: true,
    onLeave: function (origin, destination, direction) {
      menus.forEach(menu => {
        menu.forEach((item, index) => {
          const link = item.firstElementChild;

          (destination - 1 === index + 1)
            ? link.classList.add('menu__link--active')
            : link.classList.remove('menu__link--active');
        });
      });
    }
  });

  $.fn.fullpage.setAllowScrolling(true);
});
