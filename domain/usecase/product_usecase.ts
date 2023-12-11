import { ProductRepository } from '@/data/repository/product_repository';
import { Either } from '@/service/either_service';
import { ResponseProductEntities } from '../entities/response/product_entities';
import { ProductRequestEntities } from '../entities/request/product_request';
import { RequestCreeateProductsModel } from '@/data/models/requests/request_create_product_model';
import { ResponseProductCreateEntities } from '../entities/response/product_create';
import { ProductCreateRequestEntities } from '../entities/request/product_create_request';

const productRepository = new ProductRepository();

export class ProductUsecase {
    static async listProduct(
        params: ProductRequestEntities
    ): Promise<Either<Error, ResponseProductEntities>> {
        return await productRepository.product(params);
    }

    static async productCreate(
        params: ProductCreateRequestEntities
    ): Promise<Either<Error, ResponseProductCreateEntities>> {
        return await productRepository.productCreate(params);
    }
}
