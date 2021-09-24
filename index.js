/**
 * @format
 */
import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';
import reducer from './src/redux/reducers';
import {Provider} from 'react-redux';
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';

const store = createStore(reducer, {}, applyMiddleware(thunk));
const Main = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
