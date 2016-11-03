const Vue = require('vue');

export default function() {
  const vm1 = new Vue({
    el: '#app-basic',
    data: {
      message: '',
      multilineMessage: '',
      checked: [],
      picked: [],
      selected: ''
    }
  })
}
