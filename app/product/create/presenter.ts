import { SelectComponentEntities } from '@/domain/entities/components/select_component';
import { ProductCreateRequestEntities } from '@/domain/entities/request/product_create_request';
import { CategoryUsecase } from '@/domain/usecase/category_usecase';
import { ProductUsecase } from '@/domain/usecase/product_usecase';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useEffect, useState } from 'react';

export function presenterCreateProduct() {
    const router = useRouter();

    const [name, setName] = useState('');
    const [countName, setCountName] = useState(0);
    const [price, setPrice] = useState(0);
    const [stock, setStock] = useState(0);
    const [category, setCategory] = useState('');
    const [description, setDescription] = useState('');
    const [spesification, setSpefication] = useState('');
    const [images, setImages] = useState<File[]>([]);
    const [selectCategory, setSelectCategory] = useState<SelectComponentEntities[]>([
        new SelectComponentEntities({
            label: 'Select your category product',
            value: '',
        }),
    ]);

    useEffect(() => {
        fetchCategorys();
    }, []);

    const fetchCategorys = async () => {
        const category = await CategoryUsecase.listCategory();
        if (category.isRight()) {
            setSelectCategory((prev) => [
                ...prev,
                ...category.value.data.map(
                    (value) =>
                        new SelectComponentEntities({
                            label: value.name || '',
                            value: value.token || '',
                        })
                ),
            ]);
        }
    };

    const handleImages = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (files && files.length > 0) {
            setImages((prevImages) => [...prevImages, ...Array.from(files)]);
        }
    };

    const handleDeleteImageInput = (index: number) => {
        const img = [...images];
        img.splice(index, 1);
        setImages(images);
    };

    const handleName = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.value.length < 70) setName(e.target.value);
        setCountName(e.target.value.length);
    };

    const handlePrice = (e: ChangeEvent<HTMLInputElement>) =>
        setPrice(parseInt((e.target.value || '0').replace(/[^\d.]/g, ''), 10));

    const submit = async () => {
        const params = new ProductCreateRequestEntities({
            title: name,
            price: price,
            description: description,
            specification: spesification,
            stock: stock,
            category: category,
            images: images,
        });
        const usecaseCreateProduct = await ProductUsecase.productCreate(params);
        if (usecaseCreateProduct.isRight()) router.push('/product');
    };

    return {
        name,
        setName,
        countName,
        setCountName,
        price,
        setPrice,
        stock,
        setStock,
        category,
        setCategory,
        description,
        setDescription,
        spesification,
        setSpefication,
        images,
        setImages,
        selectCategory,
        setSelectCategory,
        handleImages,
        handleDeleteImageInput,
        handleName,
        handlePrice,
        submit,
    };
}
