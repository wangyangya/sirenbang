import React from 'react';
import ReactDOM from 'react-dom';


<<<<<<< HEAD
//import App from './App';
=======
// import App from './App';
>>>>>>> 3b8798da60e3f9081c69d72e67e8a033ed9422e1
import App from './router';




import axios from './utils/axios'

import * as serviceWorker from './serviceWorker';
React.Component.prototype.$axios=axios
ReactDOM.render(<App />,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
