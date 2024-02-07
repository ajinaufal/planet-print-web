import { Either } from '@/service/either_service';
import { ResponseProductEntities } from '../entities/response/product_entities';
import { CategoryRepository } from '@/data/repository/category_repository';
import { ResponseCategoryModel } from '@/data/models/responses/response_category_model';
import ResponseCategoryEntites from '../entities/response/category_entities';
import { CategoryCreateRequestEntities } from '../entities/request/category_create_request';
import { ResponseCategoryCreateEntities } from '../entities/response/category_create_entities';
import { CategoryRequestEntities } from '../entities/request/category_request';
import { CategoryUpdateRequestEntities } from '../entities/request/category_update_request';
import { ResponseCategoryUpdateEntities } from '../entities/response/category_update_entities';
import { CategoryDeleteRequestEntities } from '../entities/request/category_delete_request';
import { ResponseCategoryDeleteEntities } from '../entities/response/cateogry_delete_entities';

const categoryRepository = new CategoryRepository();

export class CategoryUsecase {
    static async listCategory(
        params?: CategoryRequestEntities
    ): Promise<Either<Error, ResponseCategoryEntites>> {
        return await categoryRepository.getCategory(params);
    }

    static async createCategory(
        params?: CategoryCreateRequestEntities
    ): Promise<Either<Error, ResponseCategoryCreateEntities>> {
        return await categoryRepository.postCreateCategory(params);
    }

    static async updateCategory(
        params?: CategoryUpdateRequestEntities
    ): Promise<Either<Error, ResponseCategoryUpdateEntities>> {
        return await categoryRepository.postUpdateCategory(params);
    }

    static async deleteCategory(
        params?: CategoryDeleteRequestEntities
    ): Promise<Either<Error, ResponseCategoryDeleteEntities>> {
        return await categoryRepository.postDeleteCategory(params);
    }
}
