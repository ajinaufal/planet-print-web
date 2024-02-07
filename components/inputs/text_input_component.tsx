import { ChangeEvent, Children } from 'react';

export function TextInput({
    value,
    onChange,
    placeHolder,
    error,
    errorMessage,
    children,
}: {
    value?: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    placeHolder?: string;
    error?: boolean;
    errorMessage?: string;
    children?: React.ReactNode;
}) {
    return (
        <div>
            <input
                type="text"
                className={
                    'w-full rounded-md border border-slage-200 shadow-md py-2 px-3 ' +
                    (error ? 'border border-orange-700' : '')
                }
                placeholder={placeHolder}
                value={value}
                onChange={onChange}
            />
            {children}
            {errorMessage && error && (
                <p className="text-left text-rose-700 mt-2 text-xs">{errorMessage}</p>
            )}
        </div>
    );
}
