const Vue = require('vue');

export default function() {
  const vm1 = new Vue({
    el: '#app-html-classes',
    data: {
      isActive: true,
      hasError: false,
      classObject: {
        'is-active': true,
        'has-error': false
      }
    }
  })
}
