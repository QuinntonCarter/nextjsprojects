import Link from 'next/link';
import navStyles from '../styles/Nav.module.css';

const Nav = () => {
    return (
        <nav className={navStyles.nav}> 
        {/* add resume link/download pdf */}
            <ul>
                <li title='Click for resume'> 
                {/* could put resume/paper icon */}
                    QC
                </li>
                <li>
                    <Link href='/'> home </Link>
                </li>
                <li>
                    <Link href='/about'> about </Link>
                </li>
                <li>
                    <Link href='/about'> projects </Link>
                </li>
                <li>
                    <Link href='/about'> visuals </Link>
                </li>
                <li>
                    <Link href='/about'> contact </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Nav