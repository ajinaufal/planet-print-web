import { v4 as uuidv4 } from 'uuid';

export class SelectComponentEntities {
    key: string;
    label: string;
    value: string;

    constructor(data: { key?: string; label: string; value: string }) {
        const { key = uuidv4(), label, value } = data;
        this.key = key;
        this.label = label;
        this.value = value;
    }
}
