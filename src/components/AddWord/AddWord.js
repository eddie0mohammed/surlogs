import React from 'react';

import styles from './AddWord.module.css';

import {connect} from 'react-redux';

import * as actionCreators from '../../Redux/Actions/actionCreators';

class AddWord extends React.Component{

    state = {
        word: '',
        translatedWord: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.addWord({word: this.state.word, language: this.state.translatedWord});

        this.setState({
            word: '',
            translatedWord: ''
        })

        this.props.hideModal();
    }

    handleCancel = () => {
        this.props.hide();
        this.setState({
            word: '',
            translatedWord: ''
        })
    }

    disabledStatus = () => {
        let check = true;

        if (this.state.word && this.state.translatedWord){
            check = false
        }
        return check;
    }

    handleTranslateClick = async (language, word) => {

        if (word.length > 0){

            await this.props.fetchTranslation(language, word);
            this.setState({
                translatedWord: this.props.translatedWord
            });

        }else{
            console.log('Error, enter a word to translate');
        }

    }

    render(){
            

        return (
            <div className={styles.addWord} data-test="addWord-component">

                <h2 className={styles.heading}>Translate New Word To: {this.props.selectedDictionary ? this.props.selectedDictionary.toLanguage : ''}</h2>

                <form className={styles.form} onSubmit={this.handleSubmit} data-test="form-component">

                    <label htmlFor="word" className={styles.label} >New Word</label>
                    <input type="text" name="word" className={styles.input} value={this.state.word} onChange={this.handleChange} data-test="word-component"/>

                    <div className={styles.translateBtn} onClick={() => this.handleTranslateClick(this.props.selectedDictionary.toLanguage, this.state.word)}>Translate</div>

                    <label htmlFor='translatedWord' className={styles.label} >Translated Word</label>
                    <input type="text" name="translatedWord" className={styles.input} value={this.state.translatedWord} onChange={this.handleChange} disabled  data-test="translatedWord-component"/>
                    
                    <div className={styles.buttons} data-test='buttons-component'>

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
        selectedDictionary: state.dic.selectedDictionary,

        translatedWord: state.dic.translatedWord
    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        addWord: (word) => dispatch(actionCreators.addWord(word)) ,

        hideModal: () => dispatch(actionCreators.hideModal()),

        fetchTranslation: (language, word) => dispatch(actionCreators.fetchTranslation(language, word))

    
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddWord);