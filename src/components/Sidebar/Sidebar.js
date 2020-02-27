import React from 'react';

import styles from './Sidebar.module.css';

import {connect} from 'react-redux';

import * as actionCreators from '../../Redux/Actions/actionCreators';


class Sidebar extends React.Component{


    renderDictionaries = () => {
        return (
            this.props.dictionaries.map((dic, i) => {
                return (
                    <li key={i} className={styles.item} onClick={() => this.props.selectDic(i)} data-test="li-component">
                        
                        {`${i + 1}. ${dic.name}: ${dic.fromLanguage} - ${dic.toLanguage}`} 
                        
                        <span className={styles.delete} onClick={() => this.props.deleteDictionary(i)}>X</span>
                    </li>
                )
            })
        )
    }

    render(){

        return (
            <div className={styles.sidebar} data-test="sidebar-component">


                <h3 className={styles.dictionaries}>Dictionaries</h3>

                <div className={styles.new} onClick={this.props.displayDicModal}>New</div>
                
                <ul className={styles.dictionaryList}>

                    {this.renderDictionaries()}

                </ul>


            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        dictionaries: state.dic.dictionaries
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectDic: (id) => dispatch(actionCreators.selectDictionary(id)),
        
        displayDicModal: () => dispatch(actionCreators.showDicModal()),

        deleteDictionary: (id) => dispatch(actionCreators.deleteDictionary(id))
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar);