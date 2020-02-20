
import React from 'react';

import styles from './MainComponent.module.css';

import {connect} from 'react-redux';

import * as actionCreators from '../../Redux/Actions/actionCreators';


class MainComponent extends React.Component{


    renderWordList = () => {
        return this.props.selectedDictionary.words.map((word, i) => {
            return (
                <li key={i} className={styles.item}>{`${i + 1}. ${word.word} - ${word.language}`} <span className={styles.delete}>X</span></li>
            )
        })
    }

    render(){

        return this.props.selectedDictionary ?

        (
            <div className={styles.mainComponent}>

                <div className={styles.container}>

                    <h3 className={styles.words}>{this.props.selectedDictionary.name} - {this.props.selectedDictionary.language}</h3>

                    <div className={styles.new} onClick={this.props.displayWordModal}>New Word</div>

                    <ul className={styles.wordList}>

                        {this.renderWordList()}

                    </ul>

                </div>


            </div>
        )
        :
        (
            <p className={styles.message}>Select a dictionary to display words</p>
        )
    }
}

const mapStateToProps = (state) => {
    return {

        selectedDictionary: state.dic.selectedDictionary

    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        displayWordModal: () => dispatch(actionCreators.showWordModal())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(MainComponent);