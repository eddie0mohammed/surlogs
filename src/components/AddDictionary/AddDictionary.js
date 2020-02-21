
import React from 'react';

import styles from './AddDictionary.module.css';

import {connect} from 'react-redux';

import * as actionCreators from '../../Redux/Actions/actionCreators';


class AddDictionary extends React.Component{

    state = {
        name: '',
        language: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.addDictionary({name: this.state.name, language: this.state.language, words:[]});
        
        this.setState({
            name: '',
            language: ''  
        })

        this.props.hideModal();



    }

    render(){

        return (
            <div className={styles.addDictionary}>
                
                <h2 className={styles.heading}>New Dictionary</h2>

                <form className={styles.form} onSubmit={this.handleSubmit}>

                    <label htmlFor="name" className={styles.label} >Dictionary Name</label>
                    <input type="text" name="name" className={styles.input} value={this.state.name} onChange={this.handleChange}/>

                    <label htmlFor="language" className={styles.label} >Language</label>
                    <input type="text" name="language" className={styles.input} value={this.state.language} onChange={this.handleChange}/>
                    
                    <div className={styles.buttons}>

                        <div className={styles.cancel} onClick={this.props.hide}>Cancel</div>
                        <button type="submit" className={styles.submit} >Add</button>

                    </div>

                </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addDictionary: (dic) => dispatch(actionCreators.addDictionary(dic)),
        hideModal: () => dispatch(actionCreators.hideModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddDictionary);