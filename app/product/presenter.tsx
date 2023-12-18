import { ProductDeleteRequestEntities } from '@/domain/entities/request/product_delete_request';
import { ProductRequestEntities } from '@/domain/entities/request/product_request';
import { ResponseProductEntities } from '@/domain/entities/response/product_entities';
import { ProductUsecase } from '@/domain/usecase/product_usecase';
import { useEffect, useState } from 'react';

export default function presenterProducts() {
    const [products, setProducts] = useState<ResponseProductEntities>();
    const [currentSize, setCurrentSize] = useState<number>(10);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const listHeader = ['IMAGES', 'NAME', 'CATEGORY', 'PRICE', 'STOCK', 'ACTIONS'];

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const request = new ProductRequestEntities();
        request.size = currentSize;
        request.page = currentPage;
        const product = await ProductUsecase.listProduct(request);
        if (product.isRight()) setProducts(product.value);
    };

    const changeSize = async (size: number) => {
        setCurrentSize(size);
        await fetchProducts();
    };

    const changePage = async (page: number) => {
        setCurrentPage((prev) => prev + page);
        await fetchProducts();
    };

    const clickDelete = async (token: string) => {
        const params = new ProductDeleteRequestEntities({ id: token });
        const usecaseDeleteProduct = await ProductUsecase.productDelete(params);
        if (usecaseDeleteProduct) await fetchProducts();
    };

    return {
        currentPage,
        currentSize,
        listHeader,
        products,
        clickDelete,
        changeSize,
        fetchProducts,
        setCurrentPage,
        changePage,
    };
}
