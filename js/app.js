new Vue({
  el: '.app',
  data: appData,
  computed: {
    sectionTitle: function () {
      return this.section[0].toUpperCase() + this.section.slice(1);
    }
  },
  methods: {
    changeToProjectsView: function () {
      this.section = 'projects';
    },
    changeToHobbiesView: function () {
      this.section = 'hobbies';
    }
  }
});
