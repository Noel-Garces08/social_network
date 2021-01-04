import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Sidebar.module.css';

const Sidebar = ({ toggleSidebar }) => {

    return (
        <aside className={toggleSidebar ? `${styles.sidebar} ${styles.sidebar_active}` : styles.sidebar}>
            <ul className={styles.link_list}>
                <li>
                    <NavLink to="/feed" className={styles.link} activeClassName={styles.link_active}>
                        <i className="fas fa-home"></i>
                        News Feed
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/find-friends" className={styles.link} activeClassName={styles.link_active}>
                        <i className="fas fa-search"></i>
                        Find Friends
                    </NavLink>
                </li>
            </ul>
        </aside>
    );
};

export default Sidebar;
