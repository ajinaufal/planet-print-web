import {
    CategoryDataModel,
    CategoryPhotoModel,
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

export class CategoryDataEntites {
    token: string | undefined;
    name: string | undefined;
    photo: CategoryPhotoEntites | undefined;
    total_product: number | undefined;
    updatedAt: string | undefined;

    constructor(data: CategoryDataModel) {
        this.token = data.token;
        this.name = data.name;
        this.photo = data.photo ? new CategoryPhotoEntites(data.photo) : undefined;
        this.total_product = data.total_product;
        this.updatedAt = data.updated_at;
    }
}

class CategoryPhotoEntites {
    token: string | undefined;
    path: string | undefined;
    name: string | undefined;
    type: string | undefined;
    size: string | undefined;
    basename: string | undefined;
    createdAt: string | undefined;

    constructor(photo: CategoryPhotoModel) {
        this.token = photo.token;
        this.path = photo.path;
        this.name = photo.name;
        this.type = photo.type;
        this.size = photo.size;
        this.basename = photo.basename;
        this.createdAt = photo.createdAt;
    }
}

export default ResponseCategoryEntites;
