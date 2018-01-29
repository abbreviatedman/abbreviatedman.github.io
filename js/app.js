new Vue({
  el: '.app',
  data: appData,
  computed: {
    sectionTitle: function () {
      return this.section[0].toUpperCase() + this.section.slice(1);
    }
  },
  methods: {
    changeView: function () {
      this.section = this.section === 'hobbies' ? 'projects' : 'hobbies';
    }
  }
});
