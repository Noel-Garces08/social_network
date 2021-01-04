import React from 'react';
import styles from './Navbar.module.css';

const Navbar = ({ toggleSidebar, setToggleSidebar }) => {

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbar_left}>
                <i className={`${toggleSidebar ? 'fas fa-times' : 'fas fa-bars'} ${styles.hamburger}`} onClick={() => setToggleSidebar((prevState) => !prevState)}></i>
                <div className={styles.navbar_logo}>The Social Network</div>
            </div>
            <div className={styles.navbar_search}></div>
            <div className={styles.navbar_icons}>
                <i className="fas fa-comment"></i>
                <i className="fas fa-bell"></i>
                <i className="fas fa-user-circle"></i>
            </div>
        </nav>
    );
};

export default Navbar;