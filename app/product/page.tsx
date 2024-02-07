'use client';

import { Layouts } from '@/components/layouts/layouts';

import presenterProducts from './presenter';

export default function Products() {
    const { products, clickDelete } = presenterProducts();

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
                <table className="table-auto w-full mt-3">
                    <thead>
                        <tr>
                            <th scope="col" className="px-1 py-1 whitespace-nowrap">
                                IMAGES
                            </th>
                            <th scope="col" className="px-1 py-1 whitespace-nowrap">
                                NAME
                            </th>
                            <th scope="col" className="px-1 py-1 whitespace-nowrap">
                                CATEGORY
                            </th>
                            <th scope="col" className="px-1 py-1 whitespace-nowrap">
                                PRICE
                            </th>
                            <th scope="col" className="px-1 py-1 whitespace-nowrap">
                                STOCK
                            </th>
                            <th scope="col" className="px-1 py-1 whitespace-nowrap">
                                ACTIONS
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {(products?.data || []).map((product) => (
                            <tr className="mt-2">
                                <td
                                    scope="col"
                                    className="px-1 py-1 rounded-l-xl bg-white border-slate-300 shadow px-5 py-3 "
                                >
                                    <div className="flex flex-row">
                                        {product.photo.map((image, i) => (
                                            <div
                                                key={i}
                                                className={
                                                    'w-9 h-9 relative' + (i > 0 ? ' -ml-5' : '')
                                                }
                                            >
                                                <img
                                                    src={
                                                        'http://localhost:4000/images/product/' +
                                                        image.name
                                                    }
                                                    alt={image.token}
                                                    className="shadow absolute w-full h-full object-cover rounded-full border"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </td>
                                <td
                                    scope="col"
                                    className="px-1 py-1 bg-white border-slate-300 shadow px-5 py-3 text-left"
                                >
                                    {product.title}
                                </td>
                                <td
                                    scope="col"
                                    className="px-1 py-1 bg-white border-slate-300 shadow px-5 py-3"
                                >
                                    {product.category.name}
                                </td>
                                <td
                                    scope="col"
                                    className="px-1 py-1 bg-white border-slate-300 shadow px-5 py-3"
                                >
                                    {product.price}
                                </td>
                                <td
                                    scope="col"
                                    className="px-1 py-1 bg-white border-slate-300 shadow px-5 py-3"
                                >
                                    {product.stocks}
                                </td>
                                <td
                                    scope="col-2"
                                    className="px-1 py-1 rounded-r-xl bg-white border-slate-300 shadow px-5 py-3"
                                >
                                    <button
                                        className="px-2 py-1 bg-orange-700 rounded text-white"
                                        onClick={async () => await clickDelete(product.token)}
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="px-2 py-1 bg-red-600 rounded text-white"
                                        onClick={async () => await clickDelete(product.token)}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </Layouts>
    );
}
