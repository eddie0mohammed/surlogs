
import React from 'react';

import styles from './Login.module.css';

import {connect} from 'react-redux';

import * as actionCreators from '../../Redux/Actions/actionCreators';


class Login extends React.Component{

    state = {
        email: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        if ((this.state.email === this.props.email) && (this.state.password === this.props.password)){
            this.props.signIn();
            
            //redirect already handled by protected Routes

        }else{

            this.props.displayErrorMsg();
        }


    }

    renderError = () => {
        return (
            <p className={styles.error} style={{display: `${this.props.error ? 'block' : 'none'}`}}>Invalid Login Credentials</p>
        )
    }


    render(){

        return (
            <div className={styles.Login}>

                <div className={styles.loginContainer}>

                    <h2 className={styles.header}>My Dictionary</h2>
                    <h3 className={styles.login}>Login</h3>

                    <form className={styles.form} onSubmit={this.handleSubmit}>

                        <label htmlFor="email" className={styles.label}>Email</label>
                        <input type="email" name="email" className={styles.input} required value={this.state.email} onChange={this.handleChange}/>

                        <label htmlFor="password" className={styles.label}>Password</label>
                        <input type="password" name="password" className={styles.input} required value={this.state.password} onChange={this.handleChange}/>

                        {this.renderError()}

                        <input type="submit" value="SUBMIT" className={styles.submit}/>

                    </form>
                </div>

                <div className={styles.credentials}>
                    <p>Login Credentials:</p>
                    <p>Email: test@test.com</p>
                    <p>Password: 11111111</p>
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        email: state.auth.email,
        password: state.auth.password,
        error: state.auth.error
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        signIn: () => dispatch(actionCreators.signIn()),

        displayErrorMsg: () => dispatch(actionCreators.displayErrorMsg())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);