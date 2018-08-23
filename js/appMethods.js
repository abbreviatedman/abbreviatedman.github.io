var appMethods = {
  changeToProjectsView: function () {
    this.section = 'projects';
  },

  changeToHobbiesView: function () {
    this.section = 'hobbies';
  },

  changeToTechnologiesView: function () {
    this.section = 'technologies';
  },

  changeJoke: function () {
    this.getNewJoke()
      .then((response) => {
        this.joke = response.data.joke;
        this.jokeButtonClicked = true;
      });
  },

  getNewJoke: function () {
    const request = {
      method: 'get',
      baseURL: 'http://icanhazdadjoke.com/',
      headers: {
        Accept: 'application/json',
      },
    };
      
    return axios(request);
  }
};
