import { ProductRepository } from '@/data/repository/product_repository';
import { Either, left, right } from '@/service/either_service';
import { ResponseProductEntities } from '../entities/response/product_entities';
import { ProductRequestEntities } from '../entities/request/product_request';
import { ResponseProductCreateEntities } from '../entities/response/product_create';
import { ProductCreateRequestEntities } from '../entities/request/product_create_request';
import { ProductDeleteRequestEntities } from '../entities/request/product_delete_request';
import { ResponseProductDeleteEntities } from '../entities/response/product_delete';

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

    static async productDelete(
        params: ProductDeleteRequestEntities
    ): Promise<Either<Error, ResponseProductDeleteEntities>> {
        return await productRepository.productDelete(params);
    }
}
