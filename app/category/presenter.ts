import { ErrorHandler } from '@/domain/entities/error/server_error';
import { CategoryDeleteRequestEntities } from '@/domain/entities/request/category_delete_request';
import ResponseCategoryEntites from '@/domain/entities/response/category_entities';
import { CategoryUsecase } from '@/domain/usecase/category_usecase';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function presenterCategorys() {
    const router = useRouter();
    const [categorys, setCategorys] = useState<ResponseCategoryEntites>();
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        fetchCategory();
        setLoading(false);
    }, [router]);

    const fetchCategory = async () => {
        const category = await CategoryUsecase.listCategory();
        if (category.isRight()) setCategorys(category.value);
        if (category.isLeft()) {
            if (category.value instanceof ErrorHandler) {
                if (category.value.status === 401) router.push('/login');
            }
        }
    };

    const handleToEdit = ({ token }: { token?: string }) => {
        if (token) router.push(`/category/update/${encodeURIComponent(token)}`);
    };

    const handleToDelete = async ({ token }: { token?: string }) => {
        setLoading(true);
        const request = new CategoryDeleteRequestEntities();
        request.id = token;
        const category = await CategoryUsecase.deleteCategory(request);
        if (category.isRight()) await fetchCategory();
        if (category.isLeft()) {
            if (category.value instanceof ErrorHandler) {
                if (category.value.status === 401) router.refresh();
            }
        }
        setLoading(false);
    };

    return { fetchCategory, categorys, handleToEdit, handleToDelete, loading };
}
