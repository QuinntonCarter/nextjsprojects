// like styled components
import styles from '../styles/Layout.module.css';
import Nav from './Nav.js';
import Header from './Header.js';

export const Layout = ({children}) => {
    return (
    <>
        <Nav/>
        <div className={styles.container}>
            <main className={styles.main}>
                <Header/>
                {/* same as giving component props param and passing {props.children} here */}
                {children}
            </main>
        </div>
    </>
    )
}