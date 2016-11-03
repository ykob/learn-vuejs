const Vue = require('vue');

export default function() {
  const vm1 = new Vue({
    el: '#app-basic',
    data: {
      message: '',
      multilineMessage: '',
      checked: [],
      picked: [],
      selected: '',
      selectedMulti: [],
      selectedItems: [
        { text: 'One', value: 'A' },
        { text: 'Two', value: 'B' },
        { text: 'Three', value: 'C' },
      ]
    }
  })
}
