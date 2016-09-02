import initCommon from './init/common.js'
import initIndex from './init/index.js'
import initStart from './init/start.js'

const { pathname } = window.location;

const init = () => {
  initCommon();
  switch (pathname.replace('index.html', '')) {
    case '/':
      initIndex();
      break;
    case '/start.html':
      initStart();
      break;
    default:
  }
}
init();
