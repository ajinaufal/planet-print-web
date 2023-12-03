import { Either, left, right } from '@/service/either_service';
import { RequestProductsModel } from '../models/requests/request_products_model';
import {
    ProductEntities,
    ResponseProductEntities,
} from '@/domain/entities/response/product_entities';
import { ProductRemoteDatasource } from '../datasource/remote/products_remote_datasource';
import { ErrorHandler } from '@/domain/entities/error/server_error';

export class ProductRepository {
    async product(params: RequestProductsModel): Promise<Either<Error, ResponseProductEntities>> {
        try {
            const loginRemote = await ProductRemoteDatasource.getProducts(params);
            return right(new ResponseProductEntities(loginRemote));
        } catch (e) {
            if (e instanceof ErrorHandler) return left(e);
            return left(new ErrorHandler(500, `${e}`, 'Repository Error'));
        }
    }
}
