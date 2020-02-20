import React from 'react';

import styles from './AddWord.module.css';

import {connect} from 'react-redux';

import * as actionCreators from '../../Redux/Actions/actionCreators';

class AddWord extends React.Component{

    state = {
        word: '',
        language: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        this.props.addWord({word: this.state.word, language: this.state.language});

        this.setState({
            word: '',
            language: ''
        })

        this.props.hideModal();
    }

    render(){

        return (
            <div className={styles.addWord}>

                <h2 className={styles.heading}>New Word</h2>

                <form className={styles.form} onSubmit={this.handleSubmit}>

                    <label htmlFor="word" className={styles.label} >New Word</label>
                    <input type="text" name="word" className={styles.input} value={this.state.word} onChange={this.handleChange}/>

                    <label htmlFor="language" className={styles.label} >Language</label>
                    <input type="text" name="language" className={styles.input} value={this.state.language} onChange={this.handleChange}/>
                    
                    <div className={styles.buttons}>

                        <button className={styles.cancel} onClick={this.props.hide}>Cancel</button>
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
        addWord: (word) => dispatch(actionCreators.addWord(word)) ,

        hideModal: () => dispatch(actionCreators.hideModal())

    
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(AddWord);