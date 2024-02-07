import { RequestCategoryModel } from '@/data/models/requests/request_category_model';

export class CategoryRequestEntities {
    token: string | undefined;

    constructor(private readonly data?: RequestCategoryModel) {
        this.token = data?.token;
    }

    public toModel(): RequestCategoryModel {
        return { token: this.token };
    }
}
