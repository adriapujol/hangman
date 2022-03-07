const axiosOptions = {
    method: 'GET',
    url: 'https://random-words-with-pronunciation.p.rapidapi.com/word',
    headers: {
        'x-rapidapi-host': 'random-words-with-pronunciation.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY
    }
};

export default axiosOptions;