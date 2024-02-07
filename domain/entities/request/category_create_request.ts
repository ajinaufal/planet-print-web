import { RequestCreateCategoryModel } from '@/data/models/requests/request_create_category_model';

export class CategoryCreateRequestEntities {
    name: string | undefined;
    images: File[];

    constructor(private readonly data?: RequestCreateCategoryModel) {
        this.name = data?.name;
        this.images = data?.images || [];
    }

    public toModel(): RequestCreateCategoryModel {
        return { name: this.name, images: this.images };
    }

    public toFromData(): FormData {
        const formData = new FormData();
        if (this.name) formData.append('name', this.name);
        if (this.images) this.images.map((image, index) => formData.append(`image`, image));
        return formData;
    }
}
