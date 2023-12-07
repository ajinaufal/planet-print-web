import { SidebarEtitiesComponent } from '@/domain/entities/components/sidebar_model_component';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faPrint } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function SideBar({ pathname }: { pathname: string }) {
    const data = new SidebarEtitiesComponent({
        menus: [
            { label: 'Dashboard', icon: faHouse, link: '/dashboard' },
            { label: 'Product', icon: faPrint, link: '/products' },
        ],
    });
    return (
        <nav className="min-h-screen hidden sm:block sm:max-md:w-1/6 md:max-xl:w-1/4 xl:max-2xl:w-[16%] 2xl:w-[16%] overflow-x-hidden sm:py-8 md:py-12">
            <a href="" className="flex items-center">
                <Image
                    className="mx-auto"
                    src="/images/logo.webp"
                    alt={'asdas'}
                    width={100}
                    height={24}
                ></Image>
            </a>
            <div className="border-t border-white my-2 sm:mx-2 md:mx-4"></div>
            {data.menus.map((menu) => (
                <Link
                    key={menu.label}
                    href={menu.link}
                    className={
                        'flex justify-start items-center h-[50px] sm:pl-2 md:pl-6 sm:ml-2 md:ml-4 sm:mb-2 ' +
                        (pathname === menu.link ? 'rounded-l-full bg-slate-50' : '')
                    }
                >
                    <FontAwesomeIcon icon={menu.icon} size="2xs" className="w-6 h-6" />
                    <p className="ml-4 text-slate-900 leading-3">{menu.label}</p>
                </Link>
            ))}
        </nav>
    );
}
