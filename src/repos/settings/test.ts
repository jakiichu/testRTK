import axios from "axios";

const apiJSON = axios.create({
    baseURL: 'https://raw.githubusercontent.com/jakiichu/corp_platform_json/master/dev_ipst_platform.json',
    withCredentials: false,

});

apiJSON.interceptors.request.use(config => {
    config.headers["Content-Type"] = 'application/json'
    return config;
}, error => Promise.reject(error));

export {apiJSON}