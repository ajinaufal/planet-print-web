import { ResponseCategoryDeleteModel } from '@/data/models/responses/response_category_delete_model';

export class ResponseCategoryDeleteEntities {
    message?: string;

    constructor(data: ResponseCategoryDeleteModel) {
        this.message = data.message;
    }
}
