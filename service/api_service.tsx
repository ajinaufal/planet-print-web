import axios from 'axios';
import { getCookie } from './cookie_service';

const axiosInstance = axios.create({
    baseURL: 'http://127.0.0.1:4000/api',
    timeout: 5000,
    headers: {
        'Content-Type': 'application/json',
        'secret-key': process.env.API_KEY,
        Authorization: getCookie('token'),
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
    (response) => response,
    (error) => error.response
);

export default axiosInstance;
