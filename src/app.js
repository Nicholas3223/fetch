import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

import MotorcyclePage from './components/MotorcyclePage';
import './app.scss';

function App() {
  return (
    <Provider store={store}>
      <div className="webpackApp__appParent">
        <MotorcyclePage />
      </div>
    </Provider>
  )
}

export default App;
