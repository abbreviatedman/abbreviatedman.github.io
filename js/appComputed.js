var appComputed = {
  sectionTitle: function() {
    return this.section[0].toUpperCase() + this.section.slice(1);
  },
  projectsButtonClasses: function () {
    return {
      current: this.section === 'projects'
    }
  },
  hobbiesButtonClasses: function () {
    return {
      current: this.section === 'hobbies'
    }
  },
  technologiesButtonClasses: function () {
    return {
      current: this.section === 'technologies'
    }
  },
};
