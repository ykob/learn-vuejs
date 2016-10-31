const Vue = require('vue');

export default function() {
  const vm1 = new Vue({
    el: '#app-listen',
    data: {
      counter: 0
    }
  })

  const vm2 = new Vue({
    el: '#app-method',
    data: {
      name: 'Yoichi Kobayashi'
    },
    methods: {
      greet: function(message, event) {
        console.log('Hello ' + this.name + '! message is ' + message)
        console.log(event)
      }
    }
  })

  const vm3 = new Vue({
    el: '#app-modifiers',
    methods: {
      doThis: function(event) {
        console.log(event)
      }
    }
  })
};
