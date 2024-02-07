import { ErrorHandler } from '@/domain/entities/error/server_error';
import { ProductDeleteRequestEntities } from '@/domain/entities/request/product_delete_request';
import { ProductRequestEntities } from '@/domain/entities/request/product_request';
import { ResponseProductEntities } from '@/domain/entities/response/product_entities';
import { ProductUsecase } from '@/domain/usecase/product_usecase';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function presenterProducts() {
    const router = useRouter();
    const [products, setProducts] = useState<ResponseProductEntities>();

    useEffect(() => {
        fetchProducts();
    }, [router]);

    const fetchProducts = async () => {
        const request = new ProductRequestEntities();
        const product = await ProductUsecase.listProduct(request);
        if (product.isRight()) setProducts(product.value);
        if (product.isLeft()) {
            if (product.value instanceof ErrorHandler && product.value.status === 401) {
                router.push('/login');
            }
        }
    };

    const clickDelete = async (token: string) => {
        const params = new ProductDeleteRequestEntities({ id: token });
        const usecaseDeleteProduct = await ProductUsecase.productDelete(params);
        if (usecaseDeleteProduct) await fetchProducts();
    };

    return { products, clickDelete, fetchProducts };
}
