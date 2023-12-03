import { RequestLoginModel } from '@/data/models/requests/request_login_model';
import { ResponseFailedModel } from '@/data/models/responses/response_failed_model';
import { ResponseLoginModel } from '@/data/models/responses/response_login_model';
import { ErrorHandler } from '@/domain/entities/error/server_error';
import ApiService from '@/service/api_service';

const apiService = new ApiService();

class AuthRemoteDatasource {
    static async postLogin(
        params: RequestLoginModel
    ): Promise<ResponseLoginModel | ResponseFailedModel> {
        try {
            const resp = await apiService.post('/v1/login', params);
            if (resp.status === 200) return resp.data;
            throw new ErrorHandler(resp.status, resp.data.message, 'network error');
        } catch (e) {
            throw new ErrorHandler(500, `${e}`, 'Network Error');
        }
    }
}

export { AuthRemoteDatasource };
