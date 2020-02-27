import React from 'react';

import styles from './Dashboard.module.css';

import Sidebar from '../../components/Sidebar/Sidebar';

import MainComponent from '../../components/MainComponent/MainComponent';


const Dashboard = () => {


        return (
            <div className={styles.dashboard} data-test="dashboard-component">

                <div className={styles.sidebarComponent}>
                    <Sidebar />

                </div>

                <div className={styles.mainComponent}>
                    
                    <MainComponent />

                </div>

            </div>
        )
    
}

export default Dashboard;