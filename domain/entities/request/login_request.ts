import { RequestLoginModel } from '@/data/models/requests/request_login_model';
import { ValidationHelper } from '@/helper/validation_helpers';

export class LoginRequestEntities {
    email: string;
    password: string;
    remember: boolean;
    constructor(private readonly data: RequestLoginModel) {
        this.email = data.email;
        this.password = data.password;
        this.remember = data.remember;
    }

    public validation(): string[] {
        const errors: string[] = [];
        if (!ValidationHelper.isValidEmail(this.email)) errors.push('email is not valid');
        if (!ValidationHelper.isValidString(this.password)) errors.push('password is not valid');
        if (!ValidationHelper.isValidBoolean(this.remember)) errors.push('remember is not valid');

        return errors;
    }

    public toModel(): RequestLoginModel {
        return {
            email: this.email,
            password: this.password,
            remember: this.remember,
        };
    }
}
