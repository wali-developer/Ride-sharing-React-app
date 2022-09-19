import axios from "axios";

const API = axios.create({
    baseURL: 'https://rid-sharing-api.herokuapp.com/'
});

export default API;