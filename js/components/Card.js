Vue.component('app-card', {
  template: '#app-card-template',
  props: {
    title: {
      type: String,
      required: true
    },
    copy: {
      type: String,
      required: true
    },
    imgUri: {
      type: String,
      required: true
    },
    linkUri: {
      type: String,
      required: false
    }
  }
});
