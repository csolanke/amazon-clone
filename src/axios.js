import axios from 'axios'

const instance = axios.create({

    baseURL:'...'//API URL for (cloud function)

});

export default instance;