import { Layouts } from '@/components/layouts/layouts';
import { faAnglesLeft, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
            <div className="w-full flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
                <ul className="mr-auto flex">
                    <li className="flex">
                        <a className="mr-2 flex items-center justify-center" href="#">
                            <FontAwesomeIcon icon={faAnglesLeft} className="w-4 h-4" />
                        </a>
                    </li>
                    <li className="flex">
                        <a className="mr-2 flex items-center justify-center" href="#">
                            <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
                        </a>
                    </li>
                    <li className="flex">
                        <a className="mr-2 flex items-center justify-center" href="#">
                            1
                        </a>
                    </li>
                    <li className="flex">
                        <a className="mr-2 flex items-center justify-center" href="#">
                            <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
                        </a>
                    </li>
                    <li className="flex">
                        <a className="mr-2 flex items-center justify-center" href="#">
                            <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
                        </a>
                    </li>
                </ul>
                <select className="w-20 form-select box mt-3 sm:mt-0">
                    <option>10</option>
                    <option>25</option>
                    <option>35</option>
                    <option>50</option>
                </select>
            </div>
        </Layouts>
    );
}
