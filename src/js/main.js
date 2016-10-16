import initCommon from './init/common.js'
import initIndex from './init/index.js'
import initStart from './init/start.js'
import initComputed from './init/computed.js'
import initStyle from './init/style.js'

const { pathname } = window.location;

const init = () => {
  initCommon();
  switch (pathname.replace('index.html', '')) {
    case '/': initIndex(); break;
    case '/start.html': initStart(); break;
    case '/computed.html': initComputed(); break;
    case '/template.html': initTemplate(); break;
    case '/style.html': initStyle(); break;
    default:
  }
}
init();
