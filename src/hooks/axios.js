import axios from 'axios';

const instance = axios.create({

  baseURL: 'http://localhost:8080/', // replace with the base URL of your API

});

export default instance;
