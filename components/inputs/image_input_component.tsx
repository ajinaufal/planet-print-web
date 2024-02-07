import { faCircleXmark, faFileImage } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { ChangeEvent, useRef } from 'react';

export function FileInput({
    multiple,
    selectedImages,
    error,
    errorMessage,
    initiate,
    handleImage,
    handleDeleteImage,
}: {
    initiate?: string[];
    multiple?: boolean;
    selectedImages: File[];
    error?: boolean;
    errorMessage?: string;
    handleImage: (e: ChangeEvent<HTMLInputElement>) => void;
    handleDeleteImage?: (index: number) => void;
}) {
    const refImageInput = useRef<HTMLInputElement | null>(null);
    const refImagesInput = useRef<HTMLInputElement | null>(null);
    const blankImage =
        'https://upload.wikimedia.org/wikipedia/commons/thumb/4/49/A_black_image.jpg/1600px-A_black_image.jpg?20201103073518';

    if (multiple) {
        return (
            <div className="flex flex-col">
                <div
                    className={
                        'z-20 border-2 border-dashed rounded-md xl:p-4 max-xl:md:p-3 max-md:p-2 flex flex-col justify-center items-center cursor-pointer relative ' +
                        (error ? 'border-orange-700' : 'border-slate-400')
                    }
                >
                    {selectedImages.length > 0 && (
                        <div className="flex flex-wrap gap-4 justify-center">
                            {(selectedImages || []).map((image, index) => {
                                const imageUrl = URL.createObjectURL(image);
                                return (
                                    <div
                                        key={index}
                                        className="z-30 h-28 w-28 relative image-fit cursor-pointer zoom-in"
                                    >
                                        <img
                                            key={index}
                                            src={imageUrl}
                                            alt={`Selected ${index}`}
                                            className="w-full h-full rounded-md border shadow-md"
                                        />
                                        <div
                                            className="w-5 h-5 flex items-center justify-center absolute right-0 top-0 -mr-2 -mt-2 rounded-full shadow"
                                            onClick={() => {
                                                console.log(index);
                                                if (handleDeleteImage) handleDeleteImage(index);
                                            }}
                                        >
                                            <FontAwesomeIcon
                                                icon={faCircleXmark}
                                                className="w-full h-full z-40"
                                                style={{ color: '#f73d28' }}
                                            />
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}
                    <span
                        className={(selectedImages.length > 0 ? 'mt-4 ' : '') + 'mr-1 text-md'}
                        onClick={() => refImagesInput.current?.click()}
                    >
                        <FontAwesomeIcon icon={faFileImage} className="w-5 h-5 mr-1" />
                        Click to upload image
                    </span>

                    <input
                        multiple
                        ref={refImagesInput}
                        type="file"
                        className="hidden"
                        accept="image/*"
                        onChange={handleImage}
                    />
                </div>
                {errorMessage && error && (
                    <p className="text-left text-rose-700 mt-2 text-xs">{errorMessage}</p>
                )}
            </div>
        );
    } else {
        return (
            <div className="flex flex-col">
                {selectedImages.length > 0 ? (
                    <div className="relative col-span-5 md:col-span-2 h-28 w-28 image-fit cursor-pointer zoom-in">
                        <img
                            src={URL.createObjectURL(selectedImages[0])}
                            alt={`image category`}
                            className="w-full h-full rounded-md border shadow-md"
                        />
                        <div
                            className="bg-black opacity-0 hover:opacity-70 absolute w-full h-full top-0 left-0 rounded-md flex flex-col justify-center items-center text-white p-2"
                            onClick={() => refImageInput.current?.click()}
                        >
                            <FontAwesomeIcon icon={faFileImage} className="w-5 h-5 mr-1" />
                            <span className="text-xs text-center mt-2">Click to change Image</span>
                        </div>
                    </div>
                ) : (initiate || []).length > 0 ? (
                    <div className="relative col-span-5 md:col-span-2 h-28 w-28 image-fit cursor-pointer zoom-in">
                        <img
                            src={(initiate || [blankImage])[0]}
                            alt={`image category`}
                            className="w-full h-full rounded-md border shadow-md"
                        />
                        <div
                            className="bg-black opacity-0 hover:opacity-70 absolute w-full h-full top-0 left-0 rounded-md flex flex-col justify-center items-center text-white p-2"
                            onClick={() => refImageInput.current?.click()}
                        >
                            <FontAwesomeIcon icon={faFileImage} className="w-5 h-5 mr-1" />
                            <span className="text-xs text-center mt-2">Click to change Image</span>
                        </div>
                    </div>
                ) : (
                    <div
                        className={
                            'flex flex-col justify-center items-center h-28 w-28 border-2 border-dashed rounded-md cursor-pointer ' +
                            (error ? 'border-orange-700' : '')
                        }
                        onClick={() => refImageInput.current?.click()}
                    >
                        <FontAwesomeIcon icon={faFileImage} className="w-5 h-5 mr-1" />
                        <span className="text-xs text-center mt-2">Click to upload Image</span>
                    </div>
                )}

                {errorMessage && error && (
                    <p className="text-left text-rose-700 mt-2 text-xs">{errorMessage}</p>
                )}
                <input
                    ref={refImageInput}
                    type="file"
                    className="hidden"
                    accept="image/*"
                    onChange={handleImage}
                />
            </div>
        );
    }
}
