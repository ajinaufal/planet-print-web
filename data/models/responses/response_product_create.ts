interface ResponseProductCreateModel {
    message: string | undefined;
    data: ResponseProductCreateDataModel | undefined;
}

interface ResponseProductCreateDataModel {
    id: string | undefined;
}

export type { ResponseProductCreateModel, ResponseProductCreateDataModel };
