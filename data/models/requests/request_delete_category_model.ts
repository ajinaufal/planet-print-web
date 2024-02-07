import { AxiosRequestConfig } from 'axios';

interface RequestDeleteCategoryModel extends AxiosRequestConfig {
    id?: string;
}

export type { RequestDeleteCategoryModel };
