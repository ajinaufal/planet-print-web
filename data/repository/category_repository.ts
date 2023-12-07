import { Either, left, right } from '@/service/either_service';
import { ErrorHandler } from '@/domain/entities/error/server_error';
import { CategoryRemoteDatasource } from '../datasource/remote/category_remote_datasource';
import CategoryEntites from '@/domain/entities/response/category_entities';

export class CategoryRepository {
    async getCategory(): Promise<Either<Error, CategoryEntites>> {
        try {
            const loginRemote = await CategoryRemoteDatasource.getCategory();
            return right(new CategoryEntites(loginRemote));
        } catch (e) {
            if (e instanceof ErrorHandler) return left(e);
            return left(new ErrorHandler(500, `${e}`, 'Repository Error'));
        }
    }
}
