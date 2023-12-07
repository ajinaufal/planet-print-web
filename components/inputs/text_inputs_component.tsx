export function TextInputComponent({
    value,
    onChange,
    classSelect,
    children,
}: {
    value: string;
    onChange: (value: string) => void;
    classSelect?: string;
    children?: React.ReactNode;
}) {
    if (!classSelect) {
        classSelect =
            'bg-no-repeat bg-[right_0.5rem_center] bg-[length:1.5em_1.5em] bg-white border w-full rounded-md text-md pt-2 pb-3 pl-2 pr-8 leading-5 border border-slage-200 shadow-md select-arrow appearance-none text-md';
    }

    return (
        <div>
            <input
                type="text"
                className="w-full rounded-md border border-slage-200 shadow-md py-2 px-3"
                placeholder="Product Name"
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />
            {children}
        </div>
    );
}
