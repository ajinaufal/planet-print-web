interface CategoryModel {
    token: string;
    name: string;
    photo: string;
    createdAt: string;
    updatedAt: string;
}

interface ProductModel {
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
}

interface ResponseProductModel {
    message: string | undefined;
    data: ProductModel[] | [];
}

export type { ResponseProductModel };
