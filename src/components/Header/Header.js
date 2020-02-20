
import React from 'react';

import styles from './Header.module.css';



class Header extends React.Component{

    
    render(){

        return (
            <div className={styles.header}>

                <div className={styles.logo}>LOGO</div>

                <div className={styles.logout}>Logout</div>

            </div>
        )
    }
}

export default Header;