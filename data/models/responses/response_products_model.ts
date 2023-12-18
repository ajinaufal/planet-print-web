export interface CategoryModel {
    token: string;
    name: string;
    photo: string;
    createdAt: string;
    updatedAt: string;
}

export interface ProductModel {
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

export interface PhotoModel {
    createdAt: Date;
    token: string;
    path: string;
    name: string;
    type: string;
    size: string;
    basename: string;
}

export interface ResponseProductModel {
    message: string | undefined;
    data: ProductModel[] | [];
    pagination: PaginationModel;
}

export interface PaginationModel {
    size: number;
    total_item: number;
    page: number;
    total_page: number;
}
