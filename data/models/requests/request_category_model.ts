import { AxiosRequestConfig } from 'axios';

interface RequestCategoryModel extends AxiosRequestConfig {
    token: string | undefined;
}

export type { RequestCategoryModel };
