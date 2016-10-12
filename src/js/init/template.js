const Vue = require('vue');

export default function() {
  const vm1 = new Vue({
    el: '#app',
    data: {
      number: 1,
      ok: true
    }
  });

  const vm2 = new Vue({
    el: '#app-filters',
    data: {
      message: 'message'
    },
    filters: {
      capitalize: function(value, arg1) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1) + ' ' + arg1
      }
    }
  })
}
