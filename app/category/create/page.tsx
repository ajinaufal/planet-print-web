'use client';
import { Layouts } from '@/components/layouts/layouts';
import { LayoutsInput } from '@/components/inputs/layouts_input';
import { FileInput } from '@/components/inputs/image_input_component';
import { TextInput } from '@/components/inputs/text_input_component';
import { presenterCreateCategory } from './presenter';

export default function CategoryCreate() {
    const presenter = presenterCreateCategory();
    return (
        <Layouts>
            <div className="bg-white p-3 shadow-md border border-slate-200 rounded-md mt-6 flex-col">
                <LayoutsInput
                    title="Image"
                    required
                    subTitle="The image format is .jpg .jpeg .png .webp and the minimum size is 300 x 300 pixels (For optimal images use a minimum size of 700 x 700 pixels)."
                >
                    <FileInput
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
                        error={presenter.errorName}
                        errorMessage="Name is required"
                        placeHolder="Category Name"
                        onChange={(e) => presenter.setName(e.target.value)}
                        value={presenter.name}
                    />
                </LayoutsInput>
                <button
                    className="shadow-md mt-2 bg-[#EC5800] px-3 py-2 rounded-md text-white text-sm cursor-pointer mt-4"
                    onClick={presenter.submit}
                >
                    Submit
                </button>
            </div>
        </Layouts>
    );
}
