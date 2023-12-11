import { RequestCreeateProductsModel } from '@/data/models/requests/request_create_product_model';
import { RequestProductsModel } from '@/data/models/requests/request_products_model';
import { ResponseProductCreateModel } from '@/data/models/responses/response_product_create';
import { ResponseProductModel } from '@/data/models/responses/response_products_model';
import { ErrorHandler } from '@/domain/entities/error/server_error';
import ApiService from '@/service/api_service';

class ProductRemoteDatasource {
    static async getProducts(params: RequestProductsModel): Promise<ResponseProductModel> {
        const apiService = new ApiService();
        try {
            const resp = await apiService.get('/v1/product');
            if (resp.status === 200) return resp.data;
            throw new ErrorHandler(resp.status, resp.data.message);
        } catch (e) {
            console.log('get product :', e);
            throw new ErrorHandler(500, `${e}`, 'Network Error');
        }
    }

    static async productCreate(params: FormData): Promise<ResponseProductCreateModel> {
        try {
            const resp = await new ApiService().post('/v1/product/create', params);
            if (resp.status === 200) return resp.data;
            throw new ErrorHandler(resp.status, resp.data.message);
        } catch (e) {
            console.log('create product :', e);
            throw new ErrorHandler(500, `${e}`, 'Network Error');
        }
    }
}

export { ProductRemoteDatasource };
