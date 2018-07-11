import React from 'react';
import ReactDOM from 'react-dom';
import Index from './src/main';
import ComponentList from './src/list';
import {HashRouter, Route} from 'react-router-dom';

import { Provider } from 'react-redux'
import { createStore } from 'redux'

// import todoApp from './redux/reducer/index.js'

import 'antd/dist/antd.css';


// let store = createStore(todoApp)

export default class Root extends React.Component{
  render() { 
      return (
        // <Provider store={store}>
          <HashRouter>
            <div>
              <Route path="/"  component={Index} />
              <Route path="/test"  component={ComponentList} /> 
            </div>
          </HashRouter>
        // </Provider>
      )
  }
}

// 程序入口
ReactDOM.render(<Root/>, document.getElementById('root'));
