interface CategoryDataModel {
    token: string | undefined;
    name: string | undefined;
    photo: CategoryPhotoModel | undefined;
    total_product: number | undefined;
    updated_at: string | undefined;
}

interface ResponseCategoryModel {
    message: string | undefined;
    data: CategoryDataModel[];
}

interface CategoryPhotoModel {
    token: string | undefined;
    path: string | undefined;
    name: string | undefined;
    type: string | undefined;
    size: string | undefined;
    basename: string | undefined;
    createdAt: string | undefined;
}

export type { CategoryDataModel, ResponseCategoryModel, CategoryPhotoModel };
