import { RequestProductsModel } from '@/data/models/requests/request_products_model';
import { ResponseProductModel } from '@/data/models/responses/response_products_model';
import ApiService from '@/service/api_service';
import { Either, right } from '@/service/either_service';

const apiService = new ApiService();

class AuthRemoteDatasource {
    static async postLogin(): Promise<Either<Error, any>> {
        const resp = await apiService.get<any>('/v1/login');
        if (resp.status === 200) return resp;
        throw Error();
    }
}

export { AuthRemoteDatasource };
