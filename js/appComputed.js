var appComputed = {
  sectionTitle: function() {
    return this.section[0].toUpperCase() + this.section.slice(1);
  },
  projectsButtonClasses: function () {
    return this.section === 'projects'
      ? 'btn-primary'
      : 'btn-outline-primary';
  },
  hobbiesButtonClasses: function () {
    return this.section === 'hobbies'
      ? 'btn-primary'
      : 'btn-outline-primary';
  },
  technologiesButtonClasses: function () {
    return this.section === 'technologies'
      ? 'btn-primary'
      : 'btn-outline-primary';
  }
};
