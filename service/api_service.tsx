import axios, { AxiosInstance, AxiosRequestConfig, AxiosStatic } from 'axios';
import { getCookie } from './cookie_service';

class ApiService {
    private axiosInstance: AxiosInstance;

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'http://127.0.0.1:4000/api',
            timeout: 5000,
            headers: {
                'Content-Type': 'application/json',
                'secret-key': process.env.API_KEY,
                Authorization: getCookie('token'),
            },
        });

        axios.interceptors.response.use(
            (response) => response,
            (error) => error.response
        );

        axios.interceptors.request.use(
            (config) => config,
            (error) => Promise.reject(error)
        );
    }

    public async get<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.axiosInstance.get(url, config).then((response) => response.data);
    }

    public async post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        return this.axiosInstance.post(url, data, config).then((response) => response.data);
    }

    public async put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
        return this.axiosInstance.put(url, data, config).then((response) => response.data);
    }

    public async delete<T>(url: string, config?: AxiosRequestConfig): Promise<T> {
        return this.axiosInstance.delete(url, config).then((response) => response.data);
    }
}

export default ApiService;
