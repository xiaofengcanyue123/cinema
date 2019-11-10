import { createStore, applyMiddleware, compose  } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk'
import allReducers from './src/reducers/allReducers';
import React from 'react';
import { Text, View } from 'react-native';
import MyNavigators from './src/navigators/MyNavigators';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(allReducers);

console.log(store.getState());

const App = () => {
  return (
    <Provider store={ store }>
        <MyNavigators/>
    </Provider>
  );
};

export default App;