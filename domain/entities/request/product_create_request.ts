import { RequestCreeateProductsModel } from '@/data/models/requests/request_create_product_model';

export class ProductCreateRequestEntities {
    title: string | undefined;
    price: number | undefined;
    category: string | undefined;
    description: string | undefined;
    specification: string | undefined;
    images: File[];

    constructor(private readonly data: RequestCreeateProductsModel) {
        this.title = data.title;
        this.price = data.price;
        this.category = data.category;
        this.description = data.description;
        this.specification = data.specification;
        this.images = data.images || [];
    }

    public toModel(): RequestCreeateProductsModel {
        return {
            title: this.title,
            price: this.price,
            category: this.category,
            description: this.description,
            specification: this.specification,
            images: this.images,
        };
    }
}
