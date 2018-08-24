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

  getNewJoke: async function () {
    const request = {
      method: 'get',
      baseURL: 'https://icanhazdadjoke.com/',
      headers: {
        Accept: 'application/json',
      },
    };

    try {
      const response = await axios(request);
      this.joke = response.data.joke;
      this.jokeButtonClicked = true;
    } catch (error) {
      console.log(error);
    }
  }
};
