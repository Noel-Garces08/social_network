import React from 'react';
import styles from './Sidebar.module.css';

const Sidebar = () => {
    return (
        <aside className={styles.sidebar}>
            <div className={styles.logo}>The Social Network</div>
            <ul className={styles.sidebar_links}>

            </ul>
        </aside>
    );
};

export default Sidebar;
