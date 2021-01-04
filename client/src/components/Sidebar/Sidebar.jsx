import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = ({ toggleSidebar }) => {
    // console.log(toggleSidebar);
    return (
        <aside className={`${styles.sidebar} ${toggleSidebar ? styles.sidebar_active : ''}`}>
            <div className={styles.logo}>The Social Network</div>
            <ul className={styles.sidebar_links}>

            </ul>
        </aside>
    );
};

export default Sidebar;
