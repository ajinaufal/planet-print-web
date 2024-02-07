import { RequestCategoryModel } from '@/data/models/requests/request_category_model';
import { RequestDeleteCategoryModel } from '@/data/models/requests/request_delete_category_model';
import { ResponseCategoryCreateModel } from '@/data/models/responses/response_category_create_model';
import { ResponseCategoryModel } from '@/data/models/responses/response_category_model';
import { ResponseCategoryUpdateModel } from '@/data/models/responses/response_category_update_model';
import { ErrorHandler } from '@/domain/entities/error/server_error';

import ApiService from '@/service/api_service';

class CategoryRemoteDatasource {
    static async getCategory(params?: RequestCategoryModel): Promise<ResponseCategoryModel> {
        try {
            const apiService = new ApiService();
            const resp = await apiService.post('/v1/category/', params);
            if (resp.status === 200) return resp.data;
            throw new ErrorHandler(resp.status, resp.data.message, 'network error');
        } catch (e) {
            throw new ErrorHandler(500, `${e}`, 'Network Error');
        }
    }

    static async postCreateCategory(params?: FormData): Promise<ResponseCategoryCreateModel> {
        try {
            const apiService = new ApiService();
            apiService.updateContentType('multipart/form-data');
            const resp = await apiService.post('/v1/category/create', params);
            if (resp.status === 200) return resp.data;
            throw new ErrorHandler(resp.status, resp.data.message, 'network error');
        } catch (e) {
            throw new ErrorHandler(500, `${e}`, 'Network Error');
        }
    }

    static async postUpdateCategory(params?: FormData): Promise<ResponseCategoryUpdateModel> {
        try {
            const apiService = new ApiService();
            apiService.updateContentType('multipart/form-data');
            const resp = await apiService.post('/v1/category/update', params);
            if (resp.status === 200) return resp.data;
            throw new ErrorHandler(resp.status, resp.data.message, 'network error');
        } catch (e) {
            throw new ErrorHandler(500, `${e}`, 'Network Error');
        }
    }

    static async postDeleteCategory(
        params?: RequestDeleteCategoryModel
    ): Promise<ResponseCategoryUpdateModel> {
        try {
            const apiService = new ApiService();
            const resp = await apiService.post('/v1/category/delete', params);
            if (resp.status === 200) return resp.data;
            throw new ErrorHandler(resp.status, resp.data.message, 'network error');
        } catch (e) {
            throw new ErrorHandler(500, `${e}`, 'Network Error');
        }
    }
}

export { CategoryRemoteDatasource };
