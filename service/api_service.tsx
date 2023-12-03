import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosStatic } from 'axios';
import { getCookie } from './cookie_service';
import { useRouter } from 'next/router';

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
            (error) => this.observer(error.response)
        );

        axios.interceptors.request.use(
            (config) => config,
            (error) => Promise.reject(error)
        );
    }

    private async observer(response: AxiosResponse<any, any>) {
        if (response.status === 401) {
            const router = useRouter();
            router.push('/login');
        }
        return response;
    }

    public async get(url: string): Promise<AxiosResponse<any, any>> {
        const response = this.axiosInstance.get(url);
        return response;
    }

    public async post(url: string, data?: any): Promise<AxiosResponse<any, any>> {
        const response = this.axiosInstance.post(url, data);
        return response;
    }

    public async put(url: string, data?: any): Promise<AxiosResponse<any, any>> {
        const response = this.axiosInstance.put(url, data);
        return response;
    }

    public async delete(url: string): Promise<AxiosResponse<any, any>> {
        const response = this.axiosInstance.delete(url);
        return response;
    }
}

export default ApiService;
