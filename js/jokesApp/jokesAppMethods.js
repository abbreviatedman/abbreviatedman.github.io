const jokesAppMethods = {
    getNewJoke: async function() {
        const request = {
            baseURL: 'https://icanhazdadjoke.com/',
            headers: {
                Accept: 'application/json',
            },
        };

        try {
            const response = await axios(request);
            this.joke = response.data.joke;
            this.jokeButtonClicked = true;
        } catch(error) {
            console.error(error);
        }
    }
}