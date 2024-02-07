import {
    ResponseCategoryCreateDataModel,
    ResponseCategoryCreateModel,
} from '@/data/models/responses/response_category_create_model';

export class ResponseCategoryCreateEntities {
    message: string | undefined;
    data: ResponseCategoryCreateDataEntities | undefined;

    constructor(data: ResponseCategoryCreateModel) {
        this.data = new ResponseCategoryCreateDataEntities(data.data);
        this.message = data.message;
    }
}

export class ResponseCategoryCreateDataEntities {
    id: string | undefined;
    constructor(data: ResponseCategoryCreateDataModel | undefined) {
        this.id = data?.id;
    }
}
