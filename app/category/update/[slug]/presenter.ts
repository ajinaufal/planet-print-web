import { ErrorHandler } from '@/domain/entities/error/server_error';
import { CategoryRequestEntities } from '@/domain/entities/request/category_request';
import { CategoryUpdateRequestEntities } from '@/domain/entities/request/category_update_request';
import { CategoryDataEntites } from '@/domain/entities/response/category_entities';
import { CategoryUsecase } from '@/domain/usecase/category_usecase';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';

export default function presenterCategoryUpdate({ params }: { params: { slug: string } }) {
    const router = useRouter();
    const [category, setCategory] = useState<CategoryDataEntites>();
    const [name, setName] = useState('');
    const [selectedImage, setSelectedImage] = useState<File[]>([]);
    const [errorName, setErrorName] = useState(false);
    const [errorImage, setErrorImage] = useState(false);

    useEffect(() => {
        fetchCategory();
    }, [router]);

    const fetchCategory = async () => {
        const prms = new CategoryRequestEntities({ token: params.slug });
        const usecase = await CategoryUsecase.listCategory(prms);
        if (usecase.isRight()) {
            setCategory(usecase.value.data[0]);
            setName(usecase.value?.data[0]?.name || '');
        }
        if (usecase.isLeft()) {
            if (usecase.value instanceof ErrorHandler) {
                if (usecase.value.status === 401) router.push('/login');
                if (usecase.value.status === 404) router.push('/category');
            }
        }
    };

    const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && Array.from(files).length > 0) setSelectedImage(Array.from(files));
    };

    const submit = async () => {
        const request = new CategoryUpdateRequestEntities();

        request.id = params.slug;

        if (name != category?.name) request.name = name;
        if (selectedImage.length > 0) request.images = selectedImage;

        const usecase = await CategoryUsecase.updateCategory(request);

        if (usecase.isRight()) router.push('/category');
        if (usecase.isLeft()) {
            if (usecase.value instanceof ErrorHandler) {
                if (usecase.value.status === 401) router.push('/login');
            }
        }
    };

    return {
        category,
        name,
        setName,
        selectedImage,
        setSelectedImage,
        handleImage,
        errorName,
        setErrorName,
        errorImage,
        setErrorImage,
        submit,
    };
}
