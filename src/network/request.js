import axios from 'axios'

export function request(config) {
    const instance1 = axios.create({
        baseURL: "http://127.0.0.1/api"
    });
    instance1.interceptors.request.use(function (config) {
        // console.log(config);
        return config;
    }, function (err) {
        // console.log(err)
    })

    instance1.interceptors.response.use((res) => {
        // console.log(res);
        return res.data
    }, (err) => {
        // console.log(err)
    });

    return instance1(config)
}

