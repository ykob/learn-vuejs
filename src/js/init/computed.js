const Vue = require('vue');

export default function() {
  const vue_basic = new Vue({
    el: '#app-basic',
    data: {
      a: 1
    },
    computed: {
      b: function() {
        return this.a + 1;
      }
    }
  });
};
