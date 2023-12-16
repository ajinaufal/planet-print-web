import { TableBodyEnums } from '@/enum/body_table_enum';
import { v4 as uuidv4 } from 'uuid';

class HeaderTable {
    key?: string;
    name: string;
    scope?: number;
    canSort?: boolean;

    constructor({
        key,
        name,
        scope,
        canSort,
    }: {
        key?: string;
        name: string;
        scope?: number;
        canSort?: boolean;
    }) {
        this.key = key || uuidv4();
        this.name = name;
        this.scope = scope || 1;
        this.canSort = canSort || false;
    }
}

class BodyTable {
    key?: string;
    single?: string;
    multiple?: string[];
    buttons?: void[];
    type: TableBodyEnums;

    constructor({
        key,
        single,
        multiple,
        buttons,
        type,
    }: {
        key?: string;
        single?: string;
        multiple?: string[];
        buttons?: void[];
        type: TableBodyEnums;
    }) {
        this.key = key;
        this.single = single;
        this.multiple = multiple;
        this.buttons = buttons;
        this.type = type;
    }
}

class TableData {
    header: HeaderTable[];
    body: BodyTable[][];

    constructor({ header, body }: { header: HeaderTable[]; body: BodyTable[][] }) {
        this.header = header;
        this.body = body;
    }
}

export { HeaderTable, BodyTable, TableData };
