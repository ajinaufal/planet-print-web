import { ResponseCategoryUpdateModel } from '@/data/models/responses/response_category_update_model';

export class ResponseCategoryUpdateEntities {
    message?: string;

    constructor(data: ResponseCategoryUpdateModel) {
        this.message = data.message;
    }
}
