import { ProductEntities } from '@/domain/entities/response/product_entities';
import { v4 as uuidv4 } from 'uuid';

export default function TableTileProduct({
    product,
    clickDelete,
}: {
    product: ProductEntities;
    clickDelete: (token: string) => Promise<void>;
}) {
    return (
        <tr key={uuidv4()}>
            <td
                scope="col"
                className="px-1 py-1 rounded-l-xl bg-white border-slate-300 shadow px-5 py-3 "
                key={uuidv4()}
            >
                <div className="flex flex-row">
                    {product.photo.map((image, i) => (
                        <div key={i} className={'w-9 h-9 relative' + (i > 0 ? ' -ml-5' : '')}>
                            <img
                                src={'http://localhost:4000/images/product/' + image.name}
                                alt={image.token}
                                className="shadow absolute w-full h-full object-cover rounded-full border"
                            />
                        </div>
                    ))}
                </div>
            </td>
            <td
                key={uuidv4()}
                scope="col"
                className="px-1 py-1 bg-white border-slate-300 shadow px-5 py-3 text-left"
            >
                {product.title}
            </td>
            <td
                key={uuidv4()}
                scope="col"
                className="px-1 py-1 bg-white border-slate-300 shadow px-5 py-3"
            >
                {product.category.name}
            </td>
            <td
                key={uuidv4()}
                scope="col"
                className="px-1 py-1 bg-white border-slate-300 shadow px-5 py-3"
            >
                {product.price}
            </td>
            <td
                key={uuidv4()}
                scope="col"
                className="px-1 py-1 bg-white border-slate-300 shadow px-5 py-3"
            >
                {product.stocks}
            </td>
            <td
                key={uuidv4()}
                scope="col-2"
                className="px-1 py-1 rounded-r-xl bg-white border-slate-300 shadow px-5 py-3"
            >
                <button onClick={async () => await clickDelete(product.token)}>Delete</button>
            </td>
        </tr>
    );
}
