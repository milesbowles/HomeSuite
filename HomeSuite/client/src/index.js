import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

render((
	<BrowserRouter>
		<App />
	</BrowserRouter>
	), document.getElementById('root'));
registerServiceWorker();


// import 'babel-polyfill'
//  
// import React from 'react'
// import { render } from 'react-dom'
// import Root from './containers/Root'
//  
// render(
//   <Root />,
//   document.getElementById('root')
// )
// render((
// 	<BrowserRouter>
// 		<App />
// 	</BrowserRouter>
// 	), document.getElementById('root'));
// registerServiceWorker();

// import "babel-polyfill";
// import React from 'react'
// import { render } from 'react-dom'
// import { Provider } from 'react-redux'
// import { createStore, applyMiddleware } from 'redux'
// import thunkMiddleware from 'redux-thunk'
// import { createLogger } from 'redux-logger'
// import suiteApp from './reducers/reducers'
// // import {fetchStocks} from "./actions/actions";
// import App from './App'

// const loggerMiddleware = createLogger()

// const store = createStore(
//   suiteApp,
//   applyMiddleware(
//     thunkMiddleware, // lets us dispatch() functions
//     loggerMiddleware // neat middleware that logs actions
//   )
// )

// // store
// //   .dispatch(fetchStocks("AAPL"))
// //   .then(() => console.log(store.getState()));

// render(
//   <Provider store={store}>
//     <App />
//   </Provider>,
//   document.getElementById('root')
// )
