
import React from 'react';

import styles from './Modal.module.css';

const Modal = (props) => {

    return (
        <div className={styles.modal} style={{display: `${props.show ? 'block' : 'none'}`}}>
            {props.children}
        </div>
    )
} 

export default Modal;