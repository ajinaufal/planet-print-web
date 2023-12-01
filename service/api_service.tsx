import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosStatic } from 'axios';
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

    public async get(url: string, config?: AxiosRequestConfig): Promise<AxiosResponse<any, any>> {
        const response = this.axiosInstance.get(url, config);
        return response;
    }

    public async post(
        url: string,
        data?: any,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<any, any>> {
        const response = this.axiosInstance.post(url, data, config);
        return response;
    }

    public async put(
        url: string,
        data?: any,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<any, any>> {
        const response = this.axiosInstance.put(url, data, config);
        return response;
    }

    public async delete(
        url: string,
        config?: AxiosRequestConfig
    ): Promise<AxiosResponse<any, any>> {
        const response = this.axiosInstance.delete(url, config);
        return response;
    }
}

export default ApiService;
