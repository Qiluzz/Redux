import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import  {Provider} from 'react-redux'
import Count from './Component/Count'
import {store} from './store'

// import {createStore} from 'redux';

// const initialState = {
//   count: 0
// }

// function reducer(state = initialState,action) {
//   switch (action.type) {
//     case "increment":
//       return { count: state.count + 1 }
//       break;
//     case "decrement":
//       return { count: state.count - 1 }
//       break;
//     default:
//       return state
//       break;
//   }
// }

// const store = createStore(reducer)

ReactDOM.render(
  // 通过Provider组件，将 store 放在全局的组件可以够得到的地方
  <Provider store = {store}>
    <Count/>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
