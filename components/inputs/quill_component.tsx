import React, { useEffect, useState } from 'react';
import { useQuill } from 'react-quilljs';
import 'quill/dist/quill.snow.css';

export function QuilComponent({
    onChange,
    value,
}: {
    onChange: (value: string) => void;
    value: string;
}) {
    const { quill, quillRef } = useQuill();

    useEffect(() => {
        if (quill) {
            quill.on('text-change', (delta: any, oldDelta: any, source: any) =>
                onChange(quill.getText())
            );
            if (value) quill.clipboard.dangerouslyPasteHTML(value);
        }
    }, [quill]);

    return <div ref={quillRef} />;
}
