import { AxiosRequestConfig } from 'axios';

interface RequestProductsModel extends AxiosRequestConfig {
    id: string | undefined | null;
    page: number | undefined | null;
    size: number | undefined | null;
}

export type { RequestProductsModel };
