import { ResponseFailedModel } from '@/data/models/responses/response_failed_model';
import {
    CategoryModel,
    ProductModel,
    ResponseProductModel,
} from '@/data/models/responses/response_products_model';

export class ResponseProductEntities {
    message: string | undefined;
    data: ProductEntities[] = [];

    constructor(data: ResponseProductModel) {
        this.data = (data.data || []).map((product) => new ProductEntities(product));
        this.message = data.message;
    }
}

export class ProductEntities {
    token: string;
    title: string;
    price: number;
    photo: string[];
    deskripsi: string | null;
    spesifikasi: string | null;
    updatedAt: string;
    sold: number;
    category: CategoryModel;
    stocks: number;

    constructor(data: ProductModel) {
        this.token = data.token;
        this.title = data.title;
        this.price = data.price;
        this.photo = data.photo;
        this.deskripsi = data.deskripsi;
        this.spesifikasi = data.spesifikasi;
        this.updatedAt = data.updatedAt;
        this.sold = data.sold;
        this.stocks = data.stocks;
        this.category = new CategoryEntities(data.category);
    }
}

class CategoryEntities {
    token: string;
    name: string;
    photo: string;
    createdAt: string;
    updatedAt: string;

    constructor(category: CategoryModel) {
        this.token = category.token;
        this.name = category.name;
        this.photo = category.photo;
        this.createdAt = category.createdAt;
        this.updatedAt = category.updatedAt;
    }
}
