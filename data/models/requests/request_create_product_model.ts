import { AxiosRequestConfig } from 'axios';

interface RequestCreeateProductsModel extends AxiosRequestConfig {
    title: string | undefined;
    price: number | undefined;
    category: string | undefined;
    description: string | undefined;
    specification: string | undefined;
    images: File[] | [];
}

export type { RequestCreeateProductsModel };
