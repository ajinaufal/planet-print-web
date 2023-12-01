import { RequestProductsModel } from '@/data/models/requests/request_products_model';
import { ResponseFailedModel } from '@/data/models/responses/response_failed_model';
import { ResponseProductModel } from '@/data/models/responses/response_products_model';
import ApiService from '@/service/api_service';
import { Either, right } from '@/service/either_service';

const apiService = new ApiService();

class ProductRemoteDatasource {
    static async getProducts(): Promise<ResponseProductModel | ResponseFailedModel> {
        try {
            const resp = await apiService.get('/v1/product');
            if (resp.status === 200) {
                const response: ResponseProductModel = JSON.parse(resp.data);
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

export { ProductRemoteDatasource };
