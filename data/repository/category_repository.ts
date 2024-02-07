import { Either, left, right } from '@/service/either_service';
import { ErrorHandler } from '@/domain/entities/error/server_error';
import { CategoryRemoteDatasource } from '../datasource/remote/category_remote_datasource';
import { ResponseCategoryEntites } from '@/domain/entities/response/category_entities';
import { ResponseCategoryCreateEntities } from '@/domain/entities/response/category_create_entities';
import { RequestCreateCategoryModel } from '../models/requests/request_create_category_model';
import { CategoryCreateRequestEntities } from '@/domain/entities/request/category_create_request';
import { CategoryRequestEntities } from '@/domain/entities/request/category_request';
import { CategoryUpdateRequestEntities } from '@/domain/entities/request/category_update_request';
import { ResponseCategoryUpdateEntities } from '@/domain/entities/response/category_update_entities';
import { CategoryDeleteRequestEntities } from '@/domain/entities/request/category_delete_request';
import { ResponseCategoryDeleteEntities } from '@/domain/entities/response/cateogry_delete_entities';

export class CategoryRepository {
    async getCategory(
        params?: CategoryRequestEntities
    ): Promise<Either<Error, ResponseCategoryEntites>> {
        try {
            const remote = await CategoryRemoteDatasource.getCategory(params?.toModel());
            return right(new ResponseCategoryEntites(remote));
        } catch (e) {
            if (e instanceof ErrorHandler) return left(e);
            return left(new ErrorHandler(500, `${e}`, 'Repository Error'));
        }
    }

    async postCreateCategory(
        params?: CategoryCreateRequestEntities
    ): Promise<Either<Error, ResponseCategoryCreateEntities>> {
        try {
            const remote = await CategoryRemoteDatasource.postCreateCategory(params?.toFromData());
            return right(new ResponseCategoryCreateEntities(remote));
        } catch (e) {
            if (e instanceof ErrorHandler) return left(e);
            return left(new ErrorHandler(500, `${e}`, 'Repository Error'));
        }
    }

    async postUpdateCategory(
        params?: CategoryUpdateRequestEntities
    ): Promise<Either<Error, ResponseCategoryUpdateEntities>> {
        try {
            const remote = await CategoryRemoteDatasource.postUpdateCategory(params?.toFromData());
            return right(new ResponseCategoryUpdateEntities(remote));
        } catch (e) {
            if (e instanceof ErrorHandler) return left(e);
            return left(new ErrorHandler(500, `${e}`, 'Repository Error'));
        }
    }

    async postDeleteCategory(
        params?: CategoryDeleteRequestEntities
    ): Promise<Either<Error, ResponseCategoryDeleteEntities>> {
        try {
            const remote = await CategoryRemoteDatasource.postDeleteCategory(params?.toModel());
            return right(new ResponseCategoryDeleteEntities(remote));
        } catch (e) {
            if (e instanceof ErrorHandler) return left(e);
            return left(new ErrorHandler(500, `${e}`, 'Repository Error'));
        }
    }
}
