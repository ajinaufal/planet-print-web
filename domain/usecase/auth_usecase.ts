import { AuthRepository } from '@/data/repository/auth_repository';
import { LoginRequestEntities } from '../entities/request/login_request';
import { Either, left, right } from '@/service/either_service';
import { setCookie } from '@/service/cookie_service';
import { LoginEntites } from '../entities/response/login_entities';
import { useRouter } from 'next/router';

const authRepository = new AuthRepository();

export class AuthUsecase {
    static async login(params: LoginRequestEntities): Promise<Either<Error, LoginEntites>> {

        const login = await authRepository.login(params.toModel());
        if (login.isRight()) {
            setCookie('token', login.value.token || '');
            // router.push('/product');
        }
        return login;
    }
}
