import { RequestDeleteCategoryModel } from '@/data/models/requests/request_delete_category_model';

export class CategoryDeleteRequestEntities {
    id?: string;

    constructor(private readonly data?: RequestDeleteCategoryModel) {
        this.id = data?.id;
    }

    public toModel(): RequestDeleteCategoryModel {
        return { id: this.id };
    }
}
