
import React from 'react';

import styles from './MainComponent.module.css';

import {connect} from 'react-redux';

import * as actionCreators from '../../Redux/Actions/actionCreators';


class MainComponent extends React.Component{


    handlePlayBtnClick = async (language, toLanguage, e) => {

        await this.props.fetchSound(language, toLanguage);
        this.refs.audio.play();

    }

    renderWordList = () => {
        return this.props.selectedDictionary.words.map((word, i) => {
            return (
                <li key={i} className={styles.item}>
                
                    {`${i + 1}. ${word.word} -`}

                    <span className={styles.translatedWord}>{word.language}</span>

                    <audio ref='audio' controls id={`audio-${word.word}`} src={`data:audio/mp3;base64, ${this.props.currentSound.audioContent}`} hidden></audio>
                    <button className={styles.play} onClick={() => this.handlePlayBtnClick(word.language, this.props.selectedDictionary.toLanguage)}>Play</button>

                    
                    <span className={styles.delete} onClick={() => this.props.deleteWord(i)}>
                        Delete
                    </span>

                </li>
            )
        })
    }

    render(){

        // console.log(this.props.currentSound);

        return this.props.selectedDictionary ?

        (
            <div className={styles.mainComponent} data-test='main-component'>

                <div className={styles.container}>

                    <h3 className={styles.words}>{this.props.selectedDictionary.name} : {this.props.selectedDictionary.fromLanguage} - {this.props.selectedDictionary.toLanguage}</h3>

                    <div className={styles.new} onClick={this.props.displayWordModal}>New Word</div>

                    <ul className={styles.wordList}>

                        {this.renderWordList()}

                    </ul>

                </div>


            </div>
        )
        :
        (
            <p className={styles.message} data-test="para-component">Select a dictionary to display words</p>
        )
    }
}

const mapStateToProps = (state) => {
    return {

        selectedDictionary: state.dic.selectedDictionary,

        currentSound: state.sound.currentSound

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        displayWordModal: () => dispatch(actionCreators.showWordModal()),

        deleteWord: (id) => dispatch(actionCreators.deleteWord(id)),

        fetchSound: (translatedWord, translatedTo) => dispatch(actionCreators.fetchSound(translatedWord, translatedTo))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);