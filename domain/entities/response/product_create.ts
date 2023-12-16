import {
    ResponseProductCreateDataModel,
    ResponseProductCreateModel,
} from '@/data/models/responses/response_product_create_model';

export class ResponseProductCreateEntities {
    message: string | undefined;
    data: ResponseProductCreateDataEntities | undefined;

    constructor(data: ResponseProductCreateModel) {
        this.data = new ResponseProductCreateDataEntities(data.data);
        this.message = data.message;
    }
}

export class ResponseProductCreateDataEntities {
    id: string | undefined;
    constructor(data: ResponseProductCreateDataModel | undefined) {
        this.id = data?.id;
    }
}
