var appComputed = {
  sectionTitle: function() {
    return this.section[0].toUpperCase() + this.section.slice(1);
  },
  projectsButtonClasses: function () {
    return {
      'btn-outline-primary': this.section === 'hobbies',
      'btn-primary': this.section === 'projects'
    };
  },
  hobbiesButtonClasses: function () {
    return {
      'btn-outline-primary': this.section === 'projects',
      'btn-primary': this.section === 'hobbies'
    };
  }
};
