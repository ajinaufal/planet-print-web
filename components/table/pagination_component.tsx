import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Pagination({
    currentSize,
    totalPage,
    currentPage,
    changeSize,
    changePage,
}: {
    currentSize: number;
    changeSize: (size: number) => Promise<void>;
    changePage: (size: number) => Promise<void>;
    totalPage: number;
    currentPage: number;
}) {
    return (
        <div className="w-full flex flex-wrap sm:flex-row sm:flex-nowrap items-center">
            <PagnationNumber
                totalPage={totalPage}
                currentPage={currentPage}
                changePage={changePage}
            />
            <PagnationSize currentSize={currentSize} changeSize={changeSize} />
        </div>
    );
}

function PagnationSize({
    currentSize,
    changeSize,
}: {
    currentSize: number;
    changeSize: (size: number) => Promise<void>;
}) {
    return (
        <select
            onChange={(event) => changeSize(parseInt(event.target.value, 10))}
            value={currentSize.toString()}
            className="w-20 form-select box mt-3 sm:mt-0 py-1 px-2 bg-white shadow rounded"
        >
            <option value={'10'}>10</option>
            <option value={'25'}>25</option>
            <option value={'35'}>35</option>
            <option value={'50'}>50</option>
        </select>
    );
}

function PagnationNumber({
    totalPage,
    currentPage,
    changePage,
}: {
    totalPage: number;
    currentPage: number;
    changePage: (size: number) => Promise<void>;
}) {
    if (totalPage) return <div className="mr-auto flex"></div>;

    return (
        <ul className="mr-auto flex">
            <button
                className={
                    'mr-2 flex items-center justify-center w-10 h-10 rounded-md ' +
                    (currentPage == 1 ? 'hidden' : '')
                }
                onClick={() => changePage(1)}
            >
                <FontAwesomeIcon icon={faChevronLeft} className="w-4 h-4" />
            </button>
            <li className="mr-2 flex items-center justify-center w-10 h-10 rounded-md bg-white border">
                {currentPage}
            </li>
            <button
                className={
                    'mr-2 flex items-center justify-center w-10 h-10 rounded-md ' +
                    (currentPage == totalPage ? 'hidden' : '')
                }
                onClick={() => changePage(-1)}
            >
                <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
            </button>
        </ul>
    );
}
