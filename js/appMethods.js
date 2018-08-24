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
      // .then(({data}) => this.joke = data.joke)
      // .catch((error) => {
      //   console.log(`error:`, error);
      // });
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
    } catch (error) {
      console.log(error);
    }
  }
};
