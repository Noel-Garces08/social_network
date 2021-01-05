import React from 'react';
import styles from './HomePage.module.css';

const HomePage = () => {
    return (
        <>
            <form className={styles.new_post}>
                <div className={styles.new_post_media}>
                    <img src="https://images.pexels.com/photos/1323206/pexels-photo-1323206.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className={styles.new_post_media_user} />
                    <input type="text" placeholder="What's On Your Mind?" className={styles.new_post_media_input} />
                </div>
                <hr />
                {/* Later Release */}
                <div className={styles.new_post_type}>
                </div>
                {/* Temporary Submit Button */}
                <button className={styles.new_post_button}>Submit Post</button>
            </form>
        </>
    );
};

export default HomePage;