import React, { Children, useEffect, useState } from 'react';

export function FrameInputsComponent({
    title,
    isRequired,
    subtitle,
    children,
    classInputs,
    classLabel,
    classFrame,
}: {
    title: string;
    subtitle?: string | null | undefined;
    isRequired?: boolean | null | undefined;
    children?: React.ReactNode;
    classInputs?: string;
    classLabel?: string;
    classFrame?: string;
}) {
    return (
        <div className={classFrame}>
            <LabelComponent
                title={title}
                subtitle={subtitle}
                isRequired={isRequired}
                classLabel={classLabel}
            />
            <div className={classInputs}>{children}</div>
        </div>
    );
}

function LabelComponent({
    title,
    isRequired,
    subtitle,
    classLabel,
}: {
    title: string;
    isRequired?: boolean | null | undefined;
    subtitle?: string | null | undefined;
    classLabel?: string;
}) {
    return (
        <div className={classLabel}>
            <div className="flex flex-row">
                <p className="font-medium">{title}</p>
                {(isRequired || false) && (
                    <div className="bg-slate-300 rounded-md px-1 text-center ml-2">
                        <p className="text-xs leading-6 text-slate-700">Required</p>
                    </div>
                )}
            </div>
            {subtitle && <p className="text-xs text-gray-600 mt-2">{subtitle}</p>}
        </div>
    );
}
