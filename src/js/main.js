const Vue = require('vue');

import initCommon from './init/common.js'
import initIndex from './init/index.js'

const { pathname } = window.location;

const init = () => {
  new Vue({
    el: '#app',
    data: {
      message: 'Hello Vue.js!'
    }
  });

  initCommon();
  switch (pathname.replace('index.html', '')) {
    case '/':
      initIndex();
      break;
    default:
  }
}
init();
