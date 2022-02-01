import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
// import { BrouserRouter } from 'react-router-dom';
import store from './redux/store';

ReactDOM.render(
  <React.StrictMode>
    {/* <BrouserRouter> */}
    <Provider store={store}>
      <App />
    </Provider>
    {/* </BrouserRouter> */}
  </React.StrictMode>,
  document.getElementById('root'),
);
