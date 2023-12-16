import { ProductDeleteRequestEntities } from '@/domain/entities/request/product_delete_request';
import { ProductRequestEntities } from '@/domain/entities/request/product_request';
import { ResponseProductEntities } from '@/domain/entities/response/product_entities';
import { ProductUsecase } from '@/domain/usecase/product_usecase';
import { useEffect, useState } from 'react';

export default function presenterProducts() {
    const [products, setProducts] = useState<ResponseProductEntities>();
    const listHeader = ['IMAGES', 'NAME', 'CATEGORY', 'PRICE', 'STOCK', 'ACTIONS'];

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const product = await ProductUsecase.listProduct(new ProductRequestEntities());
        if (product.isRight()) setProducts(product.value);
    };

    const clickDelete = async (token: string) => {
        const params = new ProductDeleteRequestEntities({ id: token });
        const usecaseDeleteProduct = await ProductUsecase.productDelete(params);
        if (usecaseDeleteProduct) await fetchProducts();
    };

    return { listHeader, products, clickDelete };
}
