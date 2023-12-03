import { ResponseFailedModel } from '@/data/models/responses/response_failed_model';
import { ResponseLoginModel } from '@/data/models/responses/response_login_model';

export class LoginEntites {
    message: string | undefined;
    token: string | undefined;

    constructor(data: ResponseLoginModel | ResponseFailedModel) {
        if (!(data instanceof Error)) {
            this.token = data.data;
            this.message = data.message;
        }
    }
}
