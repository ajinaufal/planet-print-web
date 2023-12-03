import { RequestProductsModel } from '@/data/models/requests/request_products_model';
import { ProductRepository } from '@/data/repository/product_repository';
import { Either } from '@/service/either_service';
import { ResponseProductEntities } from '../entities/response/product_entities';
import { ProductRequestEntities } from '../entities/request/product_request';

const productRepository = new ProductRepository();

export class ProductUsecase {
    static async listProduct(
        params: ProductRequestEntities
    ): Promise<Either<Error, ResponseProductEntities>> {
        return await productRepository.product(params.toModel());
    }

    static async deleteProduct(id: string) {
        
    }
}
