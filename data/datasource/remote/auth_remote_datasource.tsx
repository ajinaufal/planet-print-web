import { RequestProductsModel } from '@/data/models/requests/request_products_model';
import { ResponseFailedModel } from '@/data/models/responses/response_failed_model';
import { ResponseLoginModel } from '@/data/models/responses/response_login_model';
import ApiService from '@/service/api_service';

const apiService = new ApiService();

class AuthRemoteDatasource {
    static async postLogin(
        params: RequestProductsModel
    ): Promise<ResponseLoginModel | ResponseFailedModel> {
        try {
            const resp = await apiService.get('/v1/login');
            if (resp.status === 200) {
                const response: ResponseLoginModel = JSON.parse(resp.data);
                return response;
            } else {
                const error: ResponseFailedModel = {
                    name: 'Request Error',
                    message: resp.data.message,
                    status: resp.status,
                };
                return error;
            }
        } catch (e) {
            const error: ResponseFailedModel = {
                name: 'Network Error',
                message: 'Network error occurred',
                status: 500,
            };
            return error;
        }
    }
}

export { AuthRemoteDatasource };
