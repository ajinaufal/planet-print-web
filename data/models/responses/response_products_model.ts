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
    photo: PhotoModel[];
    deskripsi: string | null;
    spesifikasi: string | null;
    updatedAt: string;
    sold: number;
    category: CategoryModel;
    stocks: number;
}

interface PhotoModel {
    createdAt: Date;
    token: string;
    path: string;
    name: string;
    type: string;
    size: string;
    basename: string;
}

interface ResponseProductModel {
    message: string | undefined;
    data: ProductModel[] | [];
}

export type { ResponseProductModel, ProductModel, CategoryModel, PhotoModel };
