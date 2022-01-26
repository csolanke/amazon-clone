import axios from 'axios'

const instance = axios.create({

    baseURL:'http://localhost:7001/clone-db-7082f/us-central1/api/'  //API URL for (cloud function)

});

export default instance;