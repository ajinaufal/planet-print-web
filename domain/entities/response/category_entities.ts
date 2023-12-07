import {
    CategoryDataModel,
    ResponseCategoryModel,
} from '@/data/models/responses/response_category_model';

export class ResponseCategoryEntites {
    message: string | undefined;
    data: CategoryDataEntites[];

    constructor(data: ResponseCategoryModel) {
        this.data = (data.data || []).map((category) => new CategoryDataEntites(category));
        this.message = data.message;
    }
}

class CategoryDataEntites {
    token: string;
    name: string;
    photo: string;
    total_product: number;
    updatedAt: string;

    constructor(data: CategoryDataModel) {
        this.token = data.token;
        this.name = data.name;
        this.photo = data.photo;
        this.total_product = data.total_product;
        this.updatedAt = data.updated_at;
    }
}

export default ResponseCategoryEntites;
