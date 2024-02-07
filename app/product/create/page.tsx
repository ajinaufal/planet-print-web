'use client';

import { Layouts } from '@/components/layouts/layouts';
import { ChangeEvent, useEffect, useRef, useState } from 'react';
import { QuilComponent } from '@/components/inputs/quill_component';
import { CategoryUsecase } from '@/domain/usecase/category_usecase';
import { SelectComponentEntities } from '@/domain/entities/components/select_component';
import { ProductUsecase } from '@/domain/usecase/product_usecase';
import { ProductCreateRequestEntities } from '@/domain/entities/request/product_create_request';
import { useRouter } from 'next/navigation';
import { LayoutsInput } from '@/components/inputs/layouts_input';
import { FileInput } from '@/components/inputs/image_input_component';
import { TextInput } from '@/components/inputs/text_input_component';
import { SelectComponent } from '@/components/inputs/select_input_component';
import { presenterCreateProduct } from './presenter';

export default function Products() {
    const presenter = presenterCreateProduct();

    return (
        <Layouts>
            <div className="bg-white p-3 shadow-md border border-slate-200 rounded-md mt-6">
                <LayoutsInput
                    title="Image"
                    required
                    subTitle=" The image format is .jpg .jpeg .png and a minimum size of 300 x 300
                            pixels (For optimal images use a minimum size of 700 x 700 pixels).
                            Select product photos or drag and drop up to 5 photos at once here.
                            Include min. 3 attractive photos to make the product more attractive to
                            buyers."
                >
                    <FileInput
                        multiple
                        handleImage={presenter.handleImages}
                        selectedImages={presenter.images}
                        handleDeleteImage={presenter.handleDeleteImageInput}
                    />
                </LayoutsInput>
                <LayoutsInput title="Name" required>
                    <TextInput
                        placeHolder="Category Name"
                        onChange={presenter.handleName}
                        value={presenter.name}
                    >
                        <p
                            className={
                                (presenter.countName >= 70 ? 'text-red-600' : 'text-black') +
                                ' text-right text-sm mt-1'
                            }
                        >
                            Maximum character {presenter.countName}/70
                        </p>
                    </TextInput>
                </LayoutsInput>
                <LayoutsInput title="Category" required>
                    <SelectComponent
                        value={presenter.category}
                        onChange={(e) => presenter.setCategory(e.target.value)}
                        data={presenter.selectCategory}
                    />
                </LayoutsInput>
                <LayoutsInput title="Price" required>
                    <TextInput
                        value={presenter.price.toString()}
                        onChange={presenter.handlePrice}
                    />
                </LayoutsInput>
                <LayoutsInput title="Stock" required>
                    <TextInput
                        value={presenter.stock.toString()}
                        onChange={(e) =>
                            presenter.setStock(
                                parseInt((e.target.value || '0').replace(/[^\d.]/g, ''), 10)
                            )
                        }
                    />
                </LayoutsInput>
                <LayoutsInput
                    title="Description"
                    subTitle="Make sure the product description provides a detailed explanation of your product so that it is easy to understand and find your product. It is recommended not to enter info on mobile numbers, e-mails, etc. into the product description to protect your personal data."
                    required
                >
                    <div className="lg:w-full h-80 max-xl:mt-4 pb-20">
                        <QuilComponent
                            onChange={(value: string) => presenter.setDescription(value)}
                            value={presenter.description}
                        />
                    </div>
                </LayoutsInput>
                <LayoutsInput
                    title="Spesification"
                    subTitle="Make sure the product spesification provides a detailed explanation of your product so that it is easy to understand and find your product. It is recommended not to enter info on mobile numbers, e-mails, etc. into the product description to protect your personal data."
                    required
                >
                    <div className="lg:w-full h-80 max-xl:mt-4 pb-20">
                        <QuilComponent
                            onChange={(value: string) => presenter.setSpefication(value)}
                            value={presenter.spesification}
                        />
                    </div>
                </LayoutsInput>
                <button
                    className="shadow-md mt-2 bg-[#EC5800] px-3 py-2 rounded-md text-white text-sm cursor-pointer"
                    onClick={presenter.submit}
                >
                    Submit
                </button>
            </div>
        </Layouts>
    );
}
