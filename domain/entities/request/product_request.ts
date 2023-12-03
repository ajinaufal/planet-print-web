import { RequestProductsModel } from '@/data/models/requests/request_products_model';

const initial = {
    id: undefined,
    page: 1,
    size: 10,
};

export class ProductRequestEntities {
    id?: string | undefined | null;
    page: number | undefined | null;
    size: number | undefined | null;
    constructor(data: RequestProductsModel | undefined = initial) {
        this.id = data?.id || undefined;
        this.page = data?.page;
        this.size = data?.size;
    }

    public toModel(): RequestProductsModel {
        return {
            id: this.id,
            page: this.page,
            size: this.size,
        };
    }
}
