import { AxiosRequestConfig } from 'axios';

interface RequestLoginModel extends AxiosRequestConfig {
    email: string;
    password: string;
    remember: boolean;
}

export type { RequestLoginModel };
