import { faAnglesLeft, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function TableProduct({}) {
    return (
        <div className="w-full flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
            <ul className="mr-auto flex">
                <li className="mr-2 flex items-center justify-center w-10 h-10 rounded-md">
                    <FontAwesomeIcon icon={faAnglesLeft} className="w-4 h-4" />
                </li>
                <li className="mr-2 flex items-center justify-center w-10 h-10 rounded-md">
                    <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
                </li>
                <li className="mr-2 flex items-center justify-center w-10 h-10 rounded-md">1</li>
                <li className="mr-2 flex items-center justify-center w-10 h-10 rounded-md bg-white border">
                    2
                </li>
                <li className="mr-2 flex items-center justify-center w-10 h-10 rounded-md">3</li>
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
    );
}
