import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
   var config = {
    apiKey: "AIzaSyDuE87E-JeMVIWrI4zE4cqCVfgopnsE_kg",
    authDomain: "manager-e8af5.firebaseapp.com",
    databaseURL: "https://manager-e8af5.firebaseio.com",
    projectId: "manager-e8af5",
    storageBucket: "manager-e8af5.appspot.com",
    messagingSenderId: "523355399666"
  };
  firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
