const Vue = require('vue');

export default function() {
  const vm1 = new Vue({
    el: '#app-if',
    data: {
      ok: true
    }
  })

  const vm2 = new Vue({
    el: '#app-temp-if',
    data: {
      ok: false
    }
  })
};
