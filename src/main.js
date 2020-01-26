import './main.scss';

if (process.env.NODE_ENV === 'development') {
  require('file-loader!./views/faq.pug');
  require('file-loader!./views/main.pug');
}

import './scripts/scroll';
import './scripts/feedback';
import './scripts/anim';
import './layouts/blocks/burger/burger';
