import { AxiosRequestConfig } from 'axios';

interface RequestProductsModel extends AxiosRequestConfig {
    id: string;
    page: number;
    size: number;
}

export type { RequestProductsModel };
