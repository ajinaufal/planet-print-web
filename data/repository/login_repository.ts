import { Either, left, right } from '@/service/either_service';
import { AuthRemoteDatasource } from '../datasource/remote/auth_remote_datasource';
import { RequestProductsModel } from '../models/requests/request_products_model';
import { ResponseFailedModel } from '../models/responses/response_failed_model';
import { ResponseLoginModel } from '../models/responses/response_login_model';
import { LoginEntites } from '@/domain/entities/login_entities';

export class LoginRepository {
    async login(params: RequestProductsModel): Promise<Either<Error, LoginEntites>> {
        try {
            const loginModel = await AuthRemoteDatasource.postLogin(params);
            if (loginModel instanceof Error) return left(loginModel);
            return right(new LoginEntites(loginModel));
        } catch (e) {
            const error: ResponseFailedModel = {
                name: 'Repository Error',
                message: 'An error occurred in the repository',
                status: 500,
            };
            return left(error);
        }
    }
}
