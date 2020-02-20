import React from 'react';

import styles from './Dashboard.module.css';

import Sidebar from '../../components/Sidebar/Sidebar';

import MainComponent from '../../components/MainComponent/MainComponent';


class Dashboard extends React.Component{


    render(){

        return (
            <div className={styles.dashboard}>

                <div className={styles.sidebarComponent}>
                    <Sidebar />

                </div>

                <div className={styles.mainComponent}>
                    
                    <MainComponent />

                </div>

            </div>
        )
    }
}

export default Dashboard;