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
      }
    };

    /*
      The icanhazdadjokes API kindly requests
      user-agent info, but Chromium-based browsers
      will console.error if you set 'User-Agent'
      yourself.

      The request will still go through, but I'd
      rather avoid red console text if I can.
    */
    const siteDescription = 'colinjaffe.com, a personal website, colin.jaffe@gmail.com'
    if (this.isChromium()) {
      request.headers['User-Agent'] = siteDescription;
    }

    try {
      const response = await axios(request);
      this.joke = response.data.joke;
    } catch (error) {
      console.log(error);
    }
  },

  isChromium: function() {
    const isChromium = window.chrome;
    const winNav = window.navigator;
    const vendorName = winNav.vendor;
    const isOpera = typeof window.opr !== "undefined";
    const isIEedge = winNav.userAgent.indexOf("Edge") > -1;

    return isChromium !== null &&
    typeof isChromium !== "undefined" &&
    vendorName === "Google Inc." &&
    isOpera === false &&
    isIEedge === false
  }
};
