'use client';
import { Layouts } from '@/components/layouts/layouts';
import presenterCategoryUpdate from './presenter';
import { LayoutsInput } from '@/components/inputs/layouts_input';
import { TextInput } from '@/components/inputs/text_input_component';
import { FileInput } from '@/components/inputs/image_input_component';

export default function UpdateCategorys({ params }: { params: { slug: string } }) {
    const presenter = presenterCategoryUpdate({ params });

    return (
        <Layouts>
            <div className="bg-white p-3 shadow-md border border-slate-200 rounded-md mt-6 flex-col">
                <LayoutsInput
                    title="Image"
                    required
                    subTitle="The image format is .jpg .jpeg .png .webp and the minimum size is 300 x 300 pixels (For optimal images use a minimum size of 700 x 700 pixels)."
                >
                    <FileInput
                        initiate={[
                            presenter.category?.photo?.path?.replace(
                                '/public',
                                'http://127.0.0.1:4000/images'
                            ) || '',
                        ]}
                        error={presenter.errorImage}
                        errorMessage="Image is required"
                        handleImage={presenter.handleImage}
                        selectedImages={presenter.selectedImage}
                    />
                </LayoutsInput>
                <LayoutsInput
                    title="Name"
                    required
                    subTitle="Optimally, the name given can only be 1 - 3 words"
                >
                    <TextInput
                        errorMessage="Name is required"
                        placeHolder="Category Name"
                        value={presenter.name}
                        onChange={(e) => presenter.setName(e.target.value)}
                    />
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
