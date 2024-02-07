import { CategoryCreateRequestEntities } from '@/domain/entities/request/category_create_request';
import { CategoryUsecase } from '@/domain/usecase/category_usecase';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useRef, useState } from 'react';

export function presenterCreateCategory() {
    const router = useRouter();
    const refImageInput = useRef<HTMLInputElement | null>(null);
    const [name, setName] = useState('');
    const [errorName, setErrorName] = useState(false);
    const [selectedImage, setSelectedImage] = useState<File[]>([]);
    const [errorImage, setErrorImage] = useState(false);

    const handleImage = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && Array.from(files).length > 0) setSelectedImage(Array.from(files));
    };

    const handleName = (e: ChangeEvent<HTMLInputElement>) => {
        const name = e.target.value || '';
        const listName = name.split(' ');
        setName(name);
        setErrorName(listName.length > 3);
    };

    const validation = async () => {
        setErrorName(!name);
        setErrorImage(selectedImage.length == 0);

        return name && selectedImage.length != 0;
    };

    const submit = async () => {
        const valid = await validation();
        if (valid) {
            const params = new CategoryCreateRequestEntities();
            params.name = name;
            params.images = selectedImage;
            const usecase = await CategoryUsecase.createCategory(params);
            if (usecase.isRight()) router.push('/category');
        }
    };

    return {
        refImageInput,
        name,
        setName,
        selectedImage,
        setSelectedImage,
        handleImage,
        submit,
        errorName,
        errorImage,
        handleName,
    };
}
