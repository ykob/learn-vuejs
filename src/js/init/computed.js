const Vue = require('vue');

export default function() {
  const vm_basic = new Vue({
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
  console.log(vm_basic.b);
  vm_basic.a = 2;
  console.log(vm_basic.b);

  const vm_setter = new Vue({
    el: '#app-setter',
    data: {
      firstName: 'yoichi',
      lastName: 'kobayashi'
    },
    computed: {
      fullName: {
        get: function() {
          return this.firstName + ' ' + this.lastName
        },
        set: function(newValue) {
          var names = newValue.split(' ');
          this.firstName = names[0];
          this.lastName = names[names.length - 1];
        }
      }
    }
  });
  console.log(vm_setter.fullName);
  vm_setter.fullName = 'taro yamada'
  console.log(vm_setter.fullName);
};
