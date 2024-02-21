import axios from "axios";

const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com/',
    withCredentials: true,
});

api.interceptors.request.use(config => {
    config.headers["Content-Type"] = 'application/json'
    return config;
}, error => Promise.reject(error));

export {api}