# Corp_Platform_JSON

## Getting started

У нас тут траблы с гитлабом поэтому я перенес этот же проект на личный гитхаб
ссылки на dev

raw `https://raw.githubusercontent.com/jakiichu/corp_platform_json/master/dev_ipst_platform.json`

## Пример настройки axios

```
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
```