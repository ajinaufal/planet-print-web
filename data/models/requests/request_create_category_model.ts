import { AxiosRequestConfig } from 'axios';

interface RequestCreateCategoryModel extends AxiosRequestConfig {
    name: string | undefined;
    images: File[] | [];
}

export type { RequestCreateCategoryModel };
