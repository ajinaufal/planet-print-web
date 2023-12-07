import { Either, left, right } from '@/service/either_service';
import { RequestProductsModel } from '../models/requests/request_products_model';
import {
    ProductEntities,
    ResponseProductEntities,
} from '@/domain/entities/response/product_entities';
import { ProductRemoteDatasource } from '../datasource/remote/products_remote_datasource';
import { ErrorHandler } from '@/domain/entities/error/server_error';
import {
    ResponseProductCreateDataEntities,
    ResponseProductCreateEntities,
} from '@/domain/entities/response/product_create';
import { RequestCreeateProductsModel } from '../models/requests/request_create_product_model';

export class ProductRepository {
    async product(params: RequestProductsModel): Promise<Either<Error, ResponseProductEntities>> {
        try {
            const getProducts = await ProductRemoteDatasource.getProducts(params);
            return right(new ResponseProductEntities(getProducts));
        } catch (e) {
            if (e instanceof ErrorHandler) return left(e);
            return left(new ErrorHandler(500, `${e}`, 'Repository Error'));
        }
    }

    async productCreate(params: RequestCreeateProductsModel): Promise<Either<Error, ResponseProductCreateEntities>> {
        try {
            const productCreate = await ProductRemoteDatasource.productCreate(params);
            return right(new ResponseProductCreateEntities(productCreate));
        } catch (e) {
            if (e instanceof ErrorHandler) return left(e);
            return left(new ErrorHandler(500, `${e}`, 'Repository Error'));
        }
    }
}
