'use client';

import { Layouts } from '@/components/layouts/layouts';

import TableProduct from './component_table';
import presenterProducts from './presenter';

export default function Products() {
    const { products, listHeader, currentSize, currentPage, changeSize, clickDelete, changePage } =
        presenterProducts();

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
                    listHeader={listHeader}
                    changeSize={changeSize}
                    clickDelete={clickDelete}
                    currentSize={currentSize}
                    totalPage={products?.pagination.totalPage || 1}
                    currentPage={currentPage}
                    changePage={changePage}
                />
            </div>
        </Layouts>
    );
}
