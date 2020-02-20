import React from 'react';
import './App.css';

import {Switch, Route} from 'react-router-dom';

import Header from './components/Header/Header';
import Login from './Pages/Login/Login';
import DashBoard from './Pages/Dashboard/Dashboard';
import AddDictionary from './components/AddDictionary/AddDictionary';
import AddWord from './components/AddWord/AddWord';

import Modal from './UI/Modal/Modal';
import Backdrop from './UI/Backdrop/Backdrop';

import {connect} from 'react-redux';

import * as actionCreators from './Redux/Actions/actionCreators';

class App extends React.Component {

  render(){

    return (
      <div className="App">

        <Header />


        <Switch>

          <Route path='/' exact component={Login} />
          <Route path='/dashboard' exact component={DashBoard} />

        </Switch>

        <Modal show={this.props.showDicModal}>
          <AddDictionary hide={this.props.hideModal}/>
        </Modal>

        <Modal show={this.props.showWordModal} >
          <AddWord hide={this.props.hideModal}/>
        </Modal>


        {(this.props.showDicModal || this.props.showWordModal) ? 
          
          <Backdrop hide={this.props.hideModal}/>
          : 
          ''
        
        }
        
      </div>
    );

  }
 
}

const mapStateToProps = (state) => {
  return {
    showDicModal: state.modal.showDicModal,
    showWordModal: state.modal.showWordModal,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hideModal: () => dispatch(actionCreators.hideModal()),
    
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
