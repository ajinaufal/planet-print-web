import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { v4 as uuidv4 } from 'uuid';

export class SidebarEtitiesComponent {
    menus: {
        label: string;
        icon: IconDefinition;
        link: string;
        active: boolean;
    }[];

    constructor(data: {
        menus?: {
            label: string;
            icon: IconDefinition;
            link?: string;
            active?: boolean;
        }[];
    }) {
        const { menus = [] } = data;
        this.menus = menus.map(
            (data) =>
                new SidebarMenusEntitiesComponent({
                    label: data.label,
                    icon: data.icon,
                    link: data.link || '/',
                    active: data.active || false,
                })
        );
    }
}

export class SidebarMenusEntitiesComponent {
    key: string | undefined;
    label: string;
    icon: IconDefinition;
    link: string;
    active: boolean;

    constructor(data: {
        key?: string;
        label: string;
        icon: IconDefinition;
        link: string;
        active: boolean;
    }) {
        const { key = uuidv4(), label, icon, link, active } = data;
        this.key = key;
        this.label = label;
        this.icon = icon;
        this.link = link;
        this.active = active;
    }
}
