Vue.component('app-card', {
  template: '#app-card-template',
  props: {
    'title': {
      type: String,
      required: true
    },
    'copy': {
      type: String,
      required: true
    },
    'imgSrc': {
      type: String,
      required: true
    }
  }
});
