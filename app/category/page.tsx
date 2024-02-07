'use client';
import { Layouts } from '@/components/layouts/layouts';
import presenterCategorys from './presenter';

export default function Categorys() {
    const presenter = presenterCategorys();
    return (
        <Layouts>
            <div>
                <div className="flex flex-row mt-8">
                    <a
                        href="/category/create"
                        className="shadow-md mr-2 bg-[#EC5800] px-3 py-2 rounded-md text-white text-sm cursor-pointer"
                    >
                        Create Category
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
                                TOTAL PRODUCTS
                            </th>
                            <th scope="col" className="px-1 py-1 whitespace-nowrap">
                                ACTIONS
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {(presenter.categorys?.data || []).map((category) => (
                            <tr className="mt-2">
                                <td
                                    scope="col"
                                    className="px-1 py-1 rounded-l-xl bg-white border-slate-300 shadow px-5 py-3 "
                                >
                                    <div className="flex flex-row w-9 h-9">
                                        <img
                                            src={
                                                category.photo
                                                    ? 'http://localhost:4000/images/' +
                                                      (category.photo?.path || '').replace(
                                                          '/public',
                                                          ''
                                                      )
                                                    : 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Black_Wallpaper.jpg/1280px-Black_Wallpaper.jpg'
                                            }
                                            alt="test"
                                            className="shadow w-full h-full object-cover rounded-full border"
                                        />
                                    </div>
                                </td>
                                <td
                                    scope="col"
                                    className="px-1 py-1 bg-white border-slate-300 shadow px-5 py-3"
                                >
                                    {category.name}
                                </td>
                                <td
                                    scope="col"
                                    className="px-1 py-1 bg-white border-slate-300 shadow px-5 py-3"
                                >
                                    {category.total_product}
                                </td>
                                <td
                                    scope="col-2"
                                    className="px-1 py-1 rounded-r-xl bg-white border-slate-300 shadow px-5 py-3"
                                >
                                    <button
                                        className="px-2 py-1 bg-orange-700 rounded text-white mr-2"
                                        onClick={() =>
                                            presenter.handleToEdit({ token: category.token })
                                        }
                                    >
                                        Edit
                                    </button>
                                    <button
                                        className="px-2 py-1 bg-red-600 rounded text-white"
                                        onClick={() =>
                                            presenter.handleToDelete({ token: category.token })
                                        }
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
