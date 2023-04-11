import styles from './Header.module.css';

function Header(){

    return(
        <header className={styles.header_container}>
            <ul>
                <li>App01</li>
                <li>Pedro Lucas</li>
                <li>2023</li>
            </ul>
        </header>
    )
}

export default Header