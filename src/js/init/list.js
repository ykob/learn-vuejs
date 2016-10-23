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

};
