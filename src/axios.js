import axios from 'axios';

const instance =  axios.create({
    baseURL: 'YOUR SERVER URL HERE'
});

export default instance;