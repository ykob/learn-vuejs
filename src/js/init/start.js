const Vue = require('vue');

export default function() {
  const vm1 = new Vue({
    el: '#app-twoway',
    data: {
      message: 'Hello Vue.js!'
    }
  });

  const vm2 = new Vue({
    el: '#app-renderlist',
    data: {
      todos: [
        { text: 'Learn JavaScript' },
        { text: 'Learn Vue.js' },
        { text: 'Build Something Awesome' }
      ]
    }
  });

  const vm3 = new Vue({
    el: '#app-hundle-user-input',
    data: {
      message: 'Hello Vue.js'
    },
    methods: {
      reverseMessage: function() {
        this.message = this.message.split('').reverse().join('')
      }
    }
  });

  const vm4 = new Vue({
    el: '#app-all-together',
    data: {
      newTodo: '',
      todos: [
        { text: 'Add som todos' },
      ]
    },
    methods: {
      addTodo: function() {
        var text = this.newTodo.trim();
        if (text) {
          this.todos.push({ text: text });
          this.newTodo = '';
        }
      },
      removeTodo: function(index) {
        this.todos.splice(index, 1);
      }
    }
  })
};
