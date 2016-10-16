const Vue = require('vue');

export default function() {
  const vm1 = new Vue({
    el: '#app-html-classes',
    data: {
      isActive: true,
      hasError: true,
      classObject: {
        'is-active': true,
        'has-error': false
      }
    },
    computed: {
      computeClassObject: function() {
        return {
          'is-active': this.isActive && !this.hasError,
          'has-error': this.hasError && this.hasError.type === 'fatal'
        }
      }
    }
  })
}
