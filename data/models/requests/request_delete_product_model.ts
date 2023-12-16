import { AxiosRequestConfig } from 'axios';

interface RequestDeleteProductsModel extends AxiosRequestConfig {
    id: string | undefined;
}

export type { RequestDeleteProductsModel };
