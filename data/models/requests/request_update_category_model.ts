import { AxiosRequestConfig } from 'axios';

interface RequestUpdateCategoryModel extends AxiosRequestConfig {
    name?: string;
    images?: File[] | [];
    id?: string;
}

export type { RequestUpdateCategoryModel };
