import React from 'react';
import ReactDOM from 'react-dom';
<<<<<<< HEAD

//import App from './App';
import App from './router';

=======
//import App from './App';
import App from './router';
import axios from './utils/axios'
>>>>>>> 14539cfc84e9b93bfc4ad42e838517345a316656
import * as serviceWorker from './serviceWorker';
React.Component.prototype.$axios=axios
ReactDOM.render(<App />,document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
