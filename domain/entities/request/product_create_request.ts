import { RequestCreeateProductsModel } from '@/data/models/requests/request_create_product_model';

export class ProductCreateRequestEntities {
    title: string | undefined;
    price: number | undefined;
    stock: number | undefined;
    category: string | undefined;
    description: string | undefined;
    specification: string | undefined;
    images: File[];

    constructor(private readonly data?: RequestCreeateProductsModel) {
        this.title = data?.title;
        this.price = data?.price;
        this.category = data?.category;
        this.description = data?.description;
        this.specification = data?.specification;
        this.stock = data?.stock;
        this.images = data?.images || [];
    }

    public toModel(): RequestCreeateProductsModel {
        return {
            title: this.title,
            price: this.price,
            category: this.category,
            description: this.description,
            specification: this.specification,
            images: this.images,
            stock: this.stock,
        };
    }

    public toFromData(): FormData {
        const formData = new FormData();
        if (this.title) formData.append('title', this.title);
        if (this.price) formData.append('price', this.price.toString());
        if (this.description) formData.append('description', this.description);
        if (this.specification) formData.append('specification', this.specification);
        if (this.stock) formData.append('stock', this.stock.toString());
        if (this.category) formData.append('category', this.category);
        if (this.images) this.images.map((image, index) => formData.append(`images`, image));
        console.log('check from data : ', formData);
        return formData;
    }
}
