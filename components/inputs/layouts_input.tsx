import React from 'react';

export function LayoutsInput({
    children,
    title,
    subTitle,
    required,
}: {
    children?: React.ReactNode;
    title: string;
    subTitle?: string;
    required?: boolean;
}) {
    return (
        <div className="flex lg:flex-row flex-col mt-3">
            <div className="flex flex-col lg:basis-4/12 xl:basis-3/12">
                <div className="flex flex-row">
                    <p className="font-medium">{title}</p>
                    {required && (
                        <div className="bg-slate-300 rounded-md px-1 text-center ml-2">
                            <p className="text-xs leading-6 text-slate-700">Required</p>
                        </div>
                    )}
                </div>
                {subTitle && <p className="text-xs text-gray-600 mt-2 pr-2">{subTitle}</p>}
            </div>
            <div className="lg:basis-8/12 xl:basis-9/12 max-xl:mt-3">{children}</div>
        </div>
    );
}
