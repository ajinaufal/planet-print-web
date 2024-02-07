interface ResponseCategoryCreateModel {
    message: string | undefined;
    data: ResponseCategoryCreateDataModel | undefined;
}

interface ResponseCategoryCreateDataModel {
    id: string | undefined;
}

export type { ResponseCategoryCreateModel, ResponseCategoryCreateDataModel };
