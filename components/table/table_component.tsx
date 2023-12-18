import { v4 as uuidv4 } from 'uuid';

export default function Table({
    header,
    body,
    pagination,
}: {
    header: JSX.Element[];
    body: JSX.Element[];
    pagination: JSX.Element;
}) {
    return (
        <div key={uuidv4()}>
            <table
                className="table border-separate border-b-0 mt-2 w-full text-center text-sm font-light border-spacing-y-3 border-spacing-x-0"
                key={uuidv4()}
            >
                {header.length > 0 && <thead>{header}</thead>}
                {body.length > 0 && <tbody>{body}</tbody>}
            </table>
            {pagination}
        </div>
    );
}
