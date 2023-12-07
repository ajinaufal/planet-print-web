interface CategoryDataModel {
    token: string;
    name: string;
    photo: string;
    total_product: number;
    updated_at: string;
}

interface ResponseCategoryModel {
    message: string;
    data: CategoryDataModel[];
}

export type { CategoryDataModel,
    ResponseCategoryModel };
