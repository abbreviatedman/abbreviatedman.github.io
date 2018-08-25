var mainAppComputed = {
  sectionTitle: function() {
    return this.section[0].toUpperCase() + this.section.slice(1);
  },
  projectsButtonClasses: function () {
    return {
      'current-section-button': this.section === 'projects'
    }
  },
  hobbiesButtonClasses: function () {
    return {
      'current-section-button': this.section === 'hobbies'
    }
  },
  technologiesButtonClasses: function () {
    return {
      'current-section-button': this.section === 'technologies'
    }
  },
};
