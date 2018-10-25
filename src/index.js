import React from 'react';
import { Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore,combineReducers } from 'redux';
import { connect, Provider } from 'react-redux';

import CounterReactRedux  from './components/counter/CounterReactRedux.js';
import rootRedux from './reducer/rootRedux.js';
import { HashRouter as Router } from 'react-router-dom';
import App from './App.js';

const store = createStore(rootRedux);


//渲染函数中的结构外部嵌套Provier并添加store
ReactDOM.render(
    <Provider store={store}>
    	<Router>
       		 <App />
        </Router>
    </Provider>,
    document.getElementById('root')
    );