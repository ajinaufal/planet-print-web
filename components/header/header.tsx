import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

import { faChevronRight, faHouse } from '@fortawesome/free-solid-svg-icons';
import { v4 as uuidv4 } from 'uuid';

export default function Header({ pathname }: { pathname: string }) {
    const breadcrums = pathname.split('/').filter(Boolean);
    return (
        <ol className="flex m-0 p-0 list-none items-center" key={uuidv4()}>
            <li key={uuidv4()}>
                <FontAwesomeIcon key={uuidv4()} icon={faHouse} size="xs" />
            </li>
            {breadcrums.map((data) => {
                return (
                    <li key={uuidv4()}>
                        <FontAwesomeIcon
                            key={uuidv4()}
                            icon={faChevronRight}
                            size="xs"
                            className="mx-2"
                        />
                        {data}
                    </li>
                );
            })}
        </ol>
    );
}
