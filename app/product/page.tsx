'use client';

import { Layouts } from '@/components/layouts/layouts';
import presenterProducts from './presenterProducts';
import TableProduct from './component_table';

export default function Products() {
    const { listHeader, products, clickDelete } = presenterProducts();
    return (
        <Layouts>
            <div>
                <div className="flex flex-row mt-8">
                    <a
                        href="/product/create"
                        className="shadow-md mr-2 bg-[#EC5800] px-3 py-2 rounded-md text-white text-sm cursor-pointer"
                    >
                        Create Product
                    </a>
                </div>
                <TableProduct
                    products={products?.data || []}
                    clickDelete={clickDelete}
                    listHeader={listHeader}
                />
            </div>
        </Layouts>
    );
}
