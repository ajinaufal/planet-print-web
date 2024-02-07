import { SelectComponentEntities } from '@/domain/entities/components/select_component';
import { ChangeEvent } from 'react';

export function SelectComponent({
    value,
    onChange,
    data,
}: {
    value: string;
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    data: SelectComponentEntities[];
}) {
    return (
        <select
            className="bg-no-repeat bg-[right_0.5rem_center] bg-[length:1.5em_1.5em] bg-white border w-full rounded-md text-md pt-2 pb-3 pl-2 pr-8 leading-5 border border-slage-200 shadow-md select-arrow appearance-none text-md"
            onChange={onChange}
            value={value}
        >
            {data.map((select) => (
                <option key={select.key} value={select.value}>
                    {select.label}
                </option>
            ))}
        </select>
    );
}
