import { RequestCreeateProductsModel } from '@/data/models/requests/request_create_product_model';
import { RequestDeleteProductsModel } from '@/data/models/requests/request_delete_product_model';
import { RequestProductsModel } from '@/data/models/requests/request_products_model';
import { ResponseProductCreateModel } from '@/data/models/responses/response_product_create_model';
import { ResponseProductDeleteModel } from '@/data/models/responses/response_product_delete_model';
import { ResponseProductModel } from '@/data/models/responses/response_products_model';
import { ErrorHandler } from '@/domain/entities/error/server_error';
import ApiService from '@/service/api_service';
import { useRouter } from 'next/navigation';

class ProductRemoteDatasource {
    static async getProducts(params: RequestProductsModel): Promise<ResponseProductModel> {
        try {
            const apiService = new ApiService();
            const resp = await apiService.get('/v1/product/');
            if (resp.status === 200) return resp.data;
            throw new ErrorHandler(resp.status, resp.data.message);
        } catch (e) {
            throw new ErrorHandler(500, `${e}`, 'Network Error');
        }
    }

    static async productCreate(params: FormData): Promise<ResponseProductCreateModel> {
        try {
            const apiService = new ApiService();
            apiService.updateContentType('multipart/form-data');
            const resp = await apiService.post('/v1/product/create', params);
            if (resp.status === 200) return resp.data;
            throw new ErrorHandler(resp.status, resp.data.message);
        } catch (e) {
            throw new ErrorHandler(500, `${e}`, 'Network Error');
        }
    }

    static async productDelete(
        params: RequestDeleteProductsModel
    ): Promise<ResponseProductDeleteModel> {
        try {
            const apiService = new ApiService();
            const resp = await apiService.post('/v1/product/delete', params);
            if (resp.status === 200) return resp.data;
            throw new ErrorHandler(resp.status, resp.data.message);
        } catch (e) {
            throw new ErrorHandler(500, `${e}`, 'Network Error');
        }
    }
}

export { ProductRemoteDatasource };
