
import React from 'react';

import styles from './Header.module.css';

import {connect} from 'react-redux';

import * as actionCreators from '../../Redux/Actions/actionCreators';

class Header extends React.Component{

    
    render(){

        return (
            <div className={styles.header}>

                <div className={styles.logo}>MY DICTIONARY</div>

                <div className={styles.logout} style={{display: `${this.props.logged ? 'Block' : "none"}`}} onClick={this.props.logout}>Logout</div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        logged: state.auth.logged
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => dispatch(actionCreators.logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);