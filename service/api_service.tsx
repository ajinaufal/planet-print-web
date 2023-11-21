import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:4000/api',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'secret-key': process.env.API_KEY,
        Authorization:
            'hLH3Jo2QDc5cJiiDhZ7tKi8Bt86bqqchL5zi7igrbwjH7xt3qmODfKK7UJpy4mQn25LARUElMAuTsQO5p5ok2PBcjLoTY8dYuM8Di5NofBnGR/9hGsGezngHqqtqrxKohRppn6dGpbE7ztT4/1V3o7OQMQ5wahr+LDKEUyUVDL1KMoTfpr4UKnUOWzPuFObewdX9cpJdqePm36+/tq2HZLIFUGLiFPFsk/iMB7MQ8T09ozRCS+f5yz015Og18V2/DenIBqaXrdtvPQ5+9n0t1qmlsLvcYQU4d72ZHSqWU4dpTvINKqpZ1+CWQQoYxURUZ6gOoBChsO5jNFbvdDxhNQ==',
    },
});

// axiosInstance.interceptors.request.use(
//     (config) => {
//         return config;
//     },
//     (error) => {
//         return Promise.reject(error);
//     }
// );

axiosInstance.interceptors.response.use(
    (response) => {
        return response;
    },
    (error) => {
        return error;
    }
);

export default axiosInstance;
