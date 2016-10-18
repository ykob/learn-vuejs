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

  const vm2 = new Vue({
    el: '#app-inline-style',
    data: {
      activeColor: 'red',
      fontSize: 20,
      styleObject: {
        color: 'blue',
        fontSize: '15px'
      },
      overridingStyles: {
        color: 'green'
      }
    }
  });
}
