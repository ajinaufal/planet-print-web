import { Either } from '@/service/either_service';
import { ResponseProductEntities } from '../entities/response/product_entities';
import { CategoryRepository } from '@/data/repository/category_repository';
import { ResponseCategoryModel } from '@/data/models/responses/response_category_model';
import ResponseCategoryEntites from '../entities/response/category_entities';

const categoryRepository = new CategoryRepository();

export class CategoryUsecase {
    static async listCategory(): Promise<Either<Error, ResponseCategoryEntites>> {
        return await categoryRepository.getCategory();
    }
}
