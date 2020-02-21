
import React from 'react';

import styles from './AddDictionary.module.css';

import {connect} from 'react-redux';

import * as actionCreators from '../../Redux/Actions/actionCreators';

import {languages} from './languages';


class AddDictionary extends React.Component{

    state = {
        name: '',
        fromLanguage: '',
        toLanguage: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.addDictionary({name: this.state.name, toLanguage: this.state.toLanguage, fromLanguage: this.state.fromLanguage, words:[] });
        
        this.setState({
            name: '',
            fromLanguage: '',
            toLanguage: '',
        })

        this.props.hideModal();
    }

    handleCancel = () => {
        this.props.hide();
        this.setState({
            name: '',
            fromLanguage: '',
            toLanguage: ''
        })
    }

    renderLanguages = () => {
        let languagesArray = Object.keys(languages);
        // console.log(languagesArray);
        return languagesArray.map(language => {
            return <option key={languages[language]} value={language}>{language}</option>
        })
    }

    disabledStatus = () => {
        let check = true;
        if (this.state.name && this.state.fromLanguage && this.state.toLanguage){
            check = false;
        }
        return check;
    }

    render(){

        // console.log(this.state);
        

        return (
            <div className={styles.addDictionary}>
                
                <h2 className={styles.heading}>New Dictionary</h2>

                <form className={styles.form} onSubmit={this.handleSubmit}>

                    <label htmlFor="name" className={styles.label} >Dictionary Name</label>
                    <input type="text" name="name" className={styles.input} value={this.state.name} onChange={this.handleChange}/>

                    <label htmlFor="fromLanguage" className={styles.label} >Language: From</label>
                    <input type="text" name="fromLanguage" className={styles.input} value={this.state.fromLanguage} onChange={this.handleChange}/>
                    
                    <label htmlFor="toLanguage" className={styles.label} >Language: to</label>
                    <select name="toLanguage" className={styles.select} value={this.state.toLanguage} onChange={this.handleChange} >
                        
                        <option  value='choice' hidden>Choose language</option>

                        {this.renderLanguages()}

                    </select>

                    
                    
                    <div className={styles.buttons}>

                        <div className={styles.cancel} onClick={this.handleCancel}>Cancel</div>
                        <button type="submit" className={styles.submit} disabled={this.disabledStatus()}>Add</button>

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