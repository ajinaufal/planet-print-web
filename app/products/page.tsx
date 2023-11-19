'use client';

import { Layouts } from '@/components/layouts/layouts';

export default function Home() {
    return (
        <Layouts>
            <table className="table border-separate border-b-0 mt-2 w-full text-center text-sm font-light border-spacing-y-3 border-spacing-x-0">
                <thead>
                    <tr>
                        <th scope="col" className="px-1 py-1 whitespace-nowrap">
                            IMAGES
                        </th>
                        <th scope="col" className="px-1 py-1 whitespace-nowrap">
                            CATEGORY NAME
                        </th>
                        <th scope="col" className="px-1 py-1 whitespace-nowrap">
                            SLUG
                        </th>
                        <th scope="col" className="px-1 py-1 whitespace-nowrap">
                            STATUS
                        </th>
                        <th scope="col" className="px-1 py-1 whitespace-nowrap">
                            ACTIONS
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td
                            scope="col"
                            className="px-1 py-1 rounded-l-xl bg-white border-slate-300 shadow-[20px_3px_20px_#0000000b] px-5 py-3"
                        >
                            asdasd
                        </td>
                        <td
                            scope="col"
                            className="px-1 py-1 bg-white border-slate-300 shadow-[20px_3px_20px_#0000000b] px-5 py-3"
                        >
                            basdas
                        </td>
                        <td
                            scope="col"
                            className="px-1 py-1 bg-white border-slate-300 shadow-[20px_3px_20px_#0000000b] px-5 py-3"
                        >
                            absj
                        </td>
                        <td
                            scope="col"
                            className="px-1 py-1 bg-white border-slate-300 shadow-[20px_3px_20px_#0000000b] px-5 py-3"
                        >
                            lasdkh
                        </td>
                        <td
                            scope="col"
                            className="px-1 py-1 rounded-r-xl bg-white border-slate-300 shadow-[20px_3px_20px_#0000000b] px-5 py-3"
                        >
                            asdjaw
                        </td>
                    </tr>
                </tbody>
            </table>
        </Layouts>
    );
}
