const Vue = require('vue');

export default function() {
  const vm1 = new Vue({
    el: '#app-for',
    data: {
      parentMessage: 'parent',
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ]
    }
  })

  const vm2 = new Vue({
    el: '#app-object',
    data: {
      object: {
        firstName: 'Yoichi',
        lastName: 'Kobayashi',
        age: 32
      }
    }
  })

  const vm3 = new Vue({
    el: '#app-range'
  })

  const myComponent = {
    template: '<div>it is my compontent! {{ index }}: {{ item.message }}</div>',
    props: [
      'item',
      'index',
    ]
  };
  const vm4 = new Vue({
    el: '#app-components',
    data: {
      items: [
        { message: 'Foo' },
        { message: 'Bar' }
      ]
    },
    components: {
      'my-component': myComponent
    }
  })

  const vm5 = new Vue({
    el: '#app-filter',
    data: {
      numbers: [ 1, 2, 3, 4, 5 ]
    },
    computed: {
      evenNumbers: function() {
        return this.numbers.filter(function(number) {
          return number % 2 === 0;
        })
      }
    },
    methods: {
      even: function(numbers) {
        return numbers.filter(function(number) {
          return number % 2 === 1;
        })
      }
    }
  })
};
