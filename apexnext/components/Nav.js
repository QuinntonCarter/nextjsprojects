import React from 'react';
import Link from 'next/link';

const Nav = () => {
    return (
        // display: flex; flex-direction: row;
        <div>
            <ul>
                <li>
                    <Link href='/stats'> stats </Link>
                </li>
                <li>
                    <Link href='/about'> about </Link>
                </li>
            </ul>
        </div>
    )
}

export default Nav