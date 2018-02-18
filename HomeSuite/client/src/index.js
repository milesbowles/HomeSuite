import React from 'react';
<<<<<<< HEAD
import ReactDOM from 'react-dom';
import App from './Calculator/component/App';
=======
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
>>>>>>> Ernie
import './index.css';

<<<<<<< HEAD

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
=======
render((
	<BrowserRouter>
		<App />
	</BrowserRouter>
	), document.getElementById('root'));
registerServiceWorker();
>>>>>>> Ernie
