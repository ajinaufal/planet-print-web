'use client';

import { Layouts } from '@/components/layouts/layouts';
import { ProductRequestEntities } from '@/domain/entities/request/product_request';
import { ProductEntities } from '@/domain/entities/response/product_entities';
import { ProductUsecase } from '@/domain/usecase/product_usecase';
import {
    faAnglesLeft,
    faAnglesRight,
    faChevronLeft,
    faChevronRight,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';

export default function Products() {
    const [products, setProducts] = useState<ProductEntities[]>([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = async () => {
        const product = await ProductUsecase.listProduct(new ProductRequestEntities());
        if (product.isRight()) setProducts(product.value.data);
    };

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
                <table className="table border-separate border-b-0 mt-2 w-full text-center text-sm font-light border-spacing-y-3 border-spacing-x-0">
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
                            <th scope="col-2" className="px-1 py-1 whitespace-nowrap">
                                ACTIONS
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => {
                            return (
                                <tr key={product.token}>
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
                                        <button>Delete</button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <div className="w-full flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
                    <ul className="mr-auto flex">
                        <li className="mr-2 flex items-center justify-center w-10 h-10 rounded-md">
                            <FontAwesomeIcon icon={faAnglesLeft} className="w-4 h-4" />
                        </li>
                        <li className="mr-2 flex items-center justify-center w-10 h-10 rounded-md">
                            <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
                        </li>
                        <li className="mr-2 flex items-center justify-center w-10 h-10 rounded-md">
                            ...
                        </li>
                        <li className="mr-2 flex items-center justify-center w-10 h-10 rounded-md">
                            1
                        </li>
                        <li className="mr-2 flex items-center justify-center w-10 h-10 rounded-md bg-white">
                            2
                        </li>
                        <li className="mr-2 flex items-center justify-center w-10 h-10 rounded-md">
                            3
                        </li>
                        <li className="mr-2 flex items-center justify-center w-10 h-10 rounded-md">
                            ...
                        </li>
                        <li className="mr-2 flex items-center justify-center w-10 h-10 rounded-md">
                            <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
                        </li>
                        <li className="mr-2 flex items-center justify-center w-10 h-10 rounded-md">
                            <FontAwesomeIcon icon={faAnglesRight} className="w-4 h-4" />
                        </li>
                    </ul>
                    <select className="w-20 form-select box mt-3 sm:mt-0">
                        <option>10</option>
                        <option>25</option>
                        <option>35</option>
                        <option>50</option>
                    </select>
                </div>
            </div>
        </Layouts>
    );
}
