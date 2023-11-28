import { RequestProductsModel } from '@/data/models/requests/request_products_model';
import { ResponseProductModel } from '@/data/models/responses/response_products_model';
import ApiService from '@/service/api_service';
import { Either, right } from '@/service/either_service';

const apiService = new ApiService();

class ProductRemoteDatasource {
    static async getProducts(): Promise<Either<Error, any>> {
        try {
            const resp = await apiService.get<any>('/v1/product');
            console.log(JSON.stringify(resp));
            return right(resp);
        } catch (error) {
            throw error;
        }
    }
}

export { ProductRemoteDatasource };
