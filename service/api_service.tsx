import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse, AxiosStatic } from 'axios';
import { getCookie } from './cookie_service';
import { useRouter } from 'next/router';

class ApiService {
    private axiosInstance: AxiosInstance;
    private contentType: string = 'application/json';

    constructor() {
        this.axiosInstance = axios.create({
            baseURL: 'http://127.0.0.1:4000/api',
            timeout: 5000,
            headers: {
                'Content-Type': this.contentType,
                'secret-key': process.env.API_KEY,
                Authorization: getCookie('token'),
            },
        });

        this.axiosInstance.interceptors.response.use(
            (response) => response,
            (error) => this.observer(error.response)
        );

        this.axiosInstance.interceptors.request.use(
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

    public updateContentType(contentType?: string) {
        if (contentType) {
            const headers = this.axiosInstance.defaults.headers;
            headers['Content-Type'] = contentType;
            this.axiosInstance.defaults.headers = headers;
            console.log(this.axiosInstance.defaults.headers);
        }
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
