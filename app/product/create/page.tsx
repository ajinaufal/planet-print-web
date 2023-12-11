'use client';

import { Layouts } from '@/components/layouts/layouts';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import 'quill/dist/quill.snow.css';
import { QuilComponent } from '@/components/inputs/quill_component';
import { FrameInputsComponent } from '@/components/inputs/frame_inputs_component';
import { SelectComponent } from '@/components/inputs/selects_component';
import { TextInputComponent } from '@/components/inputs/text_inputs_component';
import { CategoryUsecase } from '@/domain/usecase/category_usecase';
import { SelectComponentEntities } from '@/domain/entities/components/select_component';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { ProductUsecase } from '@/domain/usecase/product_usecase';
import { ProductCreateRequestEntities } from '@/domain/entities/request/product_create_request';

export default function Products() {
    const [inputNameProduct, setInputNameProduct] = useState('');
    const [countNameProduct, setCountNameProduct] = useState(0);
    const [inputBasePrice, setBasePriceProduct] = useState(0);
    const [inputStock, setStockProduct] = useState(0);
    const [inputCategoryProduct, setCategoryProduct] = useState('');
    const [inputDescriptionProduct, setDescriptionProduct] = useState('');
    const [inputSpesificationProduct, setSpesificationProduct] = useState('');
    const [selectCategory, setSelectCategory] = useState<SelectComponentEntities[]>([]);
    const [selectedImages, setSelectedImages] = useState<File[]>([]);
    const refImageInput = useRef<HTMLInputElement | null>(null);

    useEffect(() => {
        fetchCategorys();
    }, []);

    const fetchCategorys = async () => {
        const category = await CategoryUsecase.listCategory();
        if (category.isRight()) {
            const selects = [
                new SelectComponentEntities({
                    label: 'Select your category product',
                    value: '',
                }),
            ];
            selects.push(
                ...category.value.data.map(
                    (value) =>
                        new SelectComponentEntities({ label: value.name, value: value.token })
                )
            );
            setSelectCategory(selects);
        }
    };

    const handleImageInput = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;

        if (files && files.length > 0) {
            setSelectedImages((prevImages) => [...prevImages, ...Array.from(files)]);
        }
    };

    const handleDeleteImageInput = (data: string, index: number) => {
        const images = [...selectedImages];
        images.splice(index, 1);
        setSelectedImages(images);
    };

    const createSubmit = async () => {
        const params = new ProductCreateRequestEntities({
            title: inputNameProduct,
            price: inputBasePrice,
            description: inputDescriptionProduct,
            specification: inputSpesificationProduct,
            stock: inputStock,
            category: inputCategoryProduct,
            images: selectedImages,
        });
        const usecaseCreateProduct = await ProductUsecase.productCreate(params);
    };

    return (
        <Layouts>
            <div className="bg-white p-3 shadow-md border border-slate-200 rounded-md mt-6">
                <FrameInputsComponent
                    title={'Photo'}
                    isRequired={true}
                    classInputs="w-full border-2 border-dashed rounded-md p-3"
                    classLabel="xl:w-3/12 xl:mr-5 text-left flex flex-col text-left"
                    classFrame="flex xl:flex-row flex-col mt-3"
                >
                    <div className="flex flex-col items-center justify-center">
                        <div className="grid grid-cols-10 gap-5">
                            {selectedImages.map((image, index) => {
                                const imageUrl = URL.createObjectURL(image);
                                return (
                                    <div
                                        key={index}
                                        className="col-span-5 md:col-span-2 h-28 w-28 relative image-fit cursor-pointer zoom-in"
                                    >
                                        <img
                                            key={index}
                                            src={imageUrl}
                                            alt={`Selected ${index}`}
                                            className="w-full h-full rounded-md boreder shadow-md"
                                        />
                                        <div className="w-5 h-5 flex items-center justify-center absolute right-0 top-0 -mr-2 -mt-2 rounded-full shadow">
                                            <FontAwesomeIcon
                                                onClick={() =>
                                                    handleDeleteImageInput(imageUrl, index)
                                                }
                                                icon={faCircleXmark}
                                                className="w-full h-full"
                                                style={{ color: '#f73d28' }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        <span
                            className={
                                'text-blue-500 mr-1 cursor-pointer text-md ' +
                                (selectedImages.length > 0 ? 'mt-3' : '')
                            }
                            onClick={() => refImageInput.current?.click()}
                        >
                            Upload a file
                        </span>
                        <input
                            multiple
                            ref={refImageInput}
                            type="file"
                            className="hidden"
                            accept="image/*"
                            onChange={handleImageInput}
                        />
                    </div>
                </FrameInputsComponent>
                <FrameInputsComponent
                    title={'Name'}
                    isRequired={true}
                    classInputs="w-full mt-3 xl:mt-0 flex-1 flex-col"
                    classLabel="xl:w-3/12 xl:mr-5 text-left flex flex-col text-left"
                    classFrame="flex xl:flex-row flex-col mt-3"
                >
                    <TextInputComponent
                        value={inputNameProduct}
                        onChange={(value: string) => {
                            if (value.length < 70) setInputNameProduct(value);
                            setCountNameProduct(value.length);
                        }}
                    >
                        <p
                            className={
                                (countNameProduct >= 70 ? 'text-red-600' : 'text-black') +
                                ' text-right text-sm mt-1'
                            }
                        >
                            Maximum character {countNameProduct}/70
                        </p>
                    </TextInputComponent>
                </FrameInputsComponent>
                <FrameInputsComponent
                    title={'Category'}
                    isRequired={true}
                    classInputs="w-full mt-3 xl:mt-0 flex-1 flex-col"
                    classLabel="xl:w-3/12 xl:mr-5 text-left flex flex-col text-left"
                    classFrame="flex xl:flex-row flex-col mt-6"
                >
                    <SelectComponent
                        data={selectCategory}
                        value={inputCategoryProduct}
                        onChange={(value: string) => setCategoryProduct(value)}
                    />
                </FrameInputsComponent>
                <FrameInputsComponent
                    title={'Base Price'}
                    isRequired={true}
                    classInputs="w-full mt-3 xl:mt-0 flex-1 flex-col"
                    classLabel="xl:w-3/12 xl:mr-5 text-left flex flex-col text-left"
                    classFrame="flex xl:flex-row flex-col mt-3"
                >
                    <TextInputComponent
                        value={inputBasePrice.toString()}
                        onChange={(value: string) =>
                            setBasePriceProduct(parseInt((value || '0').replace(/[^\d.]/g, ''), 10))
                        }
                    />
                </FrameInputsComponent>
                <FrameInputsComponent
                    title={'Description'}
                    subtitle={
                        'Make sure the product Description provides a detailed explanation of your product so that it is easy to understand and find your product. It is recommended not to enter info on mobile numbers, e-mails, etc. into the product description to protect your personal data.'
                    }
                    isRequired={true}
                    classInputs="xl:w-full h-96 max-xl:mt-4 pb-14 xl:ml-2"
                    classLabel="xl:w-4/12 xl:mr-5 text-left flex flex-col text-left"
                    classFrame="flex xl:flex-row flex-col mt-6"
                >
                    <QuilComponent
                        onChange={(value: string) => setDescriptionProduct(value)}
                        value={inputDescriptionProduct}
                    />
                </FrameInputsComponent>
                <FrameInputsComponent
                    title={'Spesification'}
                    subtitle={
                        'Make sure the product Spesification provides a detailed explanation of your product so that it is easy to understand and find your product. It is recommended not to enter info on mobile numbers, e-mails, etc. into the product description to protect your personal data.'
                    }
                    isRequired={true}
                    classInputs="xl:w-full h-80 max-xl:mt-4 pb-20 xl:ml-2"
                    classLabel="xl:w-4/12 xl:mr-5 text-left flex flex-col text-left"
                    classFrame="flex xl:flex-row flex-col mt-6"
                >
                    <QuilComponent
                        onChange={(value: string) => setSpesificationProduct(value)}
                        value={inputSpesificationProduct}
                    />
                </FrameInputsComponent>
                <button onClick={createSubmit}>Submit</button>
            </div>
        </Layouts>
    );
}
