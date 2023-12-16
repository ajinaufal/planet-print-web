import { ResponseProductDeleteModel } from '@/data/models/responses/response_product_delete_model';

export class ResponseProductDeleteEntities {
    message: string | undefined;

    constructor(data: ResponseProductDeleteModel) {
        this.message = data.message;
    }
}
