import { RequestLoginModel } from '@/data/models/requests/request_login_model';
import { ResponseCategoryModel } from '@/data/models/responses/response_category_model';
import { ResponseFailedModel } from '@/data/models/responses/response_failed_model';
import { ResponseLoginModel } from '@/data/models/responses/response_login_model';
import { ErrorHandler } from '@/domain/entities/error/server_error';
import ApiService from '@/service/api_service';

const apiService = new ApiService();

class CategoryRemoteDatasource {
    static async getCategory(): Promise<ResponseCategoryModel> {
        try {
            const resp = await apiService.get('/v1/category/');
            if (resp.status === 200) return resp.data;
            throw new ErrorHandler(resp.status, resp.data.message, 'network error');
        } catch (e) {
            throw new ErrorHandler(500, `${e}`, 'Network Error');
        }
    }
}

export { CategoryRemoteDatasource };
