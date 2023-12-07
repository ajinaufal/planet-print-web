import { SelectComponentEntities } from '@/domain/entities/components/select_component';

export function SelectComponent({
    value,
    onChange,
    classSelect,
    data,
}: {
    value: string;
    onChange: (value: string) => void;
    classSelect?: string;
    data: SelectComponentEntities[];
}) {
    if (!classSelect) {
        classSelect =
            'bg-no-repeat bg-[right_0.5rem_center] bg-[length:1.5em_1.5em] bg-white border w-full rounded-md text-md pt-2 pb-3 pl-2 pr-8 leading-5 border border-slage-200 shadow-md select-arrow appearance-none text-md';
    }

    return (
        <select
            className={classSelect}
            onChange={(event) => onChange(event.target.value)}
            value={value}
        >
            {data.map((select) => {
                return (
                    <option key={select.key} value={select.value}>
                        {select.label}
                    </option>
                );
            })}
        </select>
    );
}
