import './styles/main.scss';

if (process.env.NODE_ENV === 'development') {
  require('file-loader!./views/index.pug');
}

import './scripts/test';
