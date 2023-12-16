import Table from '@/components/table/table_component';
import { ProductEntities } from '@/domain/entities/response/product_entities';
import TableTileProduct from './component_tile_table';
import PaginationProduct from './PaginationProduct';

export default function TableProduct({
    products,
    clickDelete,
    listHeader,
}: {
    products: ProductEntities[];
    clickDelete: (token: string) => Promise<void>;
    listHeader: string[];
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
            pagination={<PaginationProduct />}
        />
    );
}
