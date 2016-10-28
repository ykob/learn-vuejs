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
      greet: function(event) {
        console.log('Hello ' + this.name + '!')
        console.log(event)
      }
    }
  })
};
