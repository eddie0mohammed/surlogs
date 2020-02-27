
import React from 'react';

import styles from './Header.module.css';

import {connect} from 'react-redux';

import * as actionCreators from '../../Redux/Actions/actionCreators';

const Header = (props) => {

        return (
            <div className={styles.header} data-test='header-component'>

                <div className={styles.logo}>MY DICTIONARY</div>

                <div className={styles.logout} style={{display: `${props.logged ? 'Block' : "none"}`}} onClick={props.logout}>Logout</div>

            </div>
        )
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