import './main.scss';

if (process.env.NODE_ENV === 'development') {
  require('file-loader!./views/index.pug');
}

// import './scripts/test';
import './scripts/scroll';
import './scripts/feedback';
import './layouts/blocks/burger/burger';
