import { RequestCreeateProductsModel } from '@/data/models/requests/request_create_product_model';
import { RequestDeleteProductsModel } from '@/data/models/requests/request_delete_product_model';

export class ProductDeleteRequestEntities {
    id: string | undefined;

    constructor(private readonly data?: RequestDeleteProductsModel) {
        this.id = data?.id;
    }

    public toModel(): RequestDeleteProductsModel {
        return { id: this.id };
    }
}
