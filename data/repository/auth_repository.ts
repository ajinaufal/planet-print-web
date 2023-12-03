import { Either, left, right } from '@/service/either_service';
import { AuthRemoteDatasource } from '../datasource/remote/auth_remote_datasource';
import { ResponseFailedModel } from '../models/responses/response_failed_model';
import { LoginEntites } from '@/domain/entities/response/login_entities';
import { RequestLoginModel } from '../models/requests/request_login_model';

export class AuthRepository {
    async login(params: RequestLoginModel): Promise<Either<Error, LoginEntites>> {
        try {
            const loginModel = await AuthRemoteDatasource.postLogin(params);
            if (loginModel instanceof Error) return left(loginModel);
            return right(new LoginEntites(loginModel));
        } catch (e) {
            const error: ResponseFailedModel = {
                name: 'Repository Error',
                message: `${e}`,
                status: 500,
            };
            return left(error);
        }
    }
}
