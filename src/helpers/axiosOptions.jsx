const axiosOptions = {
    method: 'GET',
    url: 'https://random-words5.p.rapidapi.com/getRandom',
    params: { minLength: 4, maxLength: '8' },
    headers: {
        'x-rapidapi-host': 'random-words5.p.rapidapi.com',
        'x-rapidapi-key': process.env.REACT_APP_API_KEY
    }
};

export default axiosOptions;