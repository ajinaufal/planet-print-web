import { RequestUpdateCategoryModel } from '@/data/models/requests/request_update_category_model';

export class CategoryUpdateRequestEntities {
    name?: string;
    id?: string;
    images?: File[];

    constructor(private readonly data?: RequestUpdateCategoryModel) {
        this.name = data?.name;
        this.images = data?.images;
        this.id = data?.id;
    }

    public toModel(): RequestUpdateCategoryModel {
        return { name: this.name, images: this.images, id: this.id };
    }

    public toFromData(): FormData {
        const formData = new FormData();
        if (this.name) formData.append('name', this.name);
        if (this.id) formData.append('id', this.id);
        if (this.images && this.images.length > 0) {
            this.images.map((image) => formData.append(`image`, image));
        }
        return formData;
    }
}
