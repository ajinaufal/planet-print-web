import Table from '@/components/table/table_component';
import { ProductEntities } from '@/domain/entities/response/product_entities';
import TableTileProduct from './component_tile_table';
import Pagination from '@/components/table/pagination_component';
import { Dispatch, SetStateAction } from 'react';

export default function TableProduct({
    products,
    listHeader,
    currentSize,
    totalPage,
    currentPage,
    changeSize,
    clickDelete,
    changePage,
}: {
    products: ProductEntities[];
    listHeader: string[];
    currentSize: number;
    totalPage: number;
    currentPage: number;
    changeSize: (size: number) => Promise<void>;
    changePage: (size: number) => Promise<void>;
    clickDelete: (token: string) => Promise<void>;
}) {
    return (
        <Table
            header={listHeader.map((header, index) => (
                <th scope="col" className="px-1 py-1 whitespace-nowrap" key={index}>
                    {header}
                </th>
            ))}
            body={products.map((product) => (
                <TableTileProduct product={product} clickDelete={clickDelete} />
            ))}
            pagination={
                <Pagination
                    changeSize={changeSize}
                    currentSize={currentSize}
                    totalPage={totalPage}
                    currentPage={currentPage}
                    changePage={changePage}
                />
            }
        />
    );
}
