
import React from 'react';

import styles from './Login.module.css';


class Login extends React.Component{


    render(){

        return (
            <div className={styles.Login}>

                <div className={styles.loginContainer}>

                    <h2 className={styles.header}>My Dictionary</h2>
                    <h3 className={styles.login}>Login</h3>

                    <form className={styles.form}>
                        <label htmlFor="email" className={styles.label}>Email</label>
                        <input type="email" className={styles.input} required/>

                        <label htmlFor="password" className={styles.label}>Password</label>
                        <input type="password" className={styles.input} required/>

                        <input type="submit" value="SUBMIT" className={styles.submit}/>
                    </form>
                </div>

            </div>
        )
    }
}

export default Login;