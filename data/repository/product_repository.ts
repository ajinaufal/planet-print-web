import { Either, left, right } from '@/service/either_service';
import { ResponseProductEntities } from '@/domain/entities/response/product_entities';
import { ProductRemoteDatasource } from '../datasource/remote/products_remote_datasource';
import { ErrorHandler } from '@/domain/entities/error/server_error';
import { ResponseProductCreateEntities } from '@/domain/entities/response/product_create';
import { ProductCreateRequestEntities } from '@/domain/entities/request/product_create_request';
import { ProductRequestEntities } from '@/domain/entities/request/product_request';

export class ProductRepository {
    async product(params: ProductRequestEntities): Promise<Either<Error, ResponseProductEntities>> {
        try {
            const getProducts = await ProductRemoteDatasource.getProducts(params.toModel());
            return right(new ResponseProductEntities(getProducts));
        } catch (e) {
            if (e instanceof ErrorHandler) return left(e);
            return left(new ErrorHandler(500, `${e}`, 'Repository Error'));
        }
    }

    async productCreate(
        params: ProductCreateRequestEntities
    ): Promise<Either<Error, ResponseProductCreateEntities>> {
        try {
            const productCreate = await ProductRemoteDatasource.productCreate(params.toFromData());
            return right(new ResponseProductCreateEntities(productCreate));
        } catch (e) {
            if (e instanceof ErrorHandler) return left(e);
            return left(new ErrorHandler(500, `${e}`, 'Repository Error'));
        }
    }
}
