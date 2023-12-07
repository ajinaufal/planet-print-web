import { RequestProductsModel } from '@/data/models/requests/request_products_model';
import { ResponseProductModel } from '@/data/models/responses/response_products_model';
import { ErrorHandler } from '@/domain/entities/error/server_error';
import ApiService from '@/service/api_service';

const apiService = new ApiService();

class ProductRemoteDatasource {
    static async getProducts(params: RequestProductsModel): Promise<ResponseProductModel> {
        try {
            const resp = await apiService.get('/v1/product');
            if (resp.status === 200) return resp.data;
            throw new ErrorHandler(resp.status, resp.data.message);
        } catch (e) {
            console.log('products repo :', e);
            throw new ErrorHandler(500, `${e}`, 'Network Error');
        }
    }
}

export { ProductRemoteDatasource };
