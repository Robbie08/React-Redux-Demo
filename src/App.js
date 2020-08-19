import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import logo from './logo.svg';
import './App.css';
import CakeContainer from './components/CakeContainer';


// to wrap our app with redux add Provider(also import)
// pass in store as prop to Provider
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CakeContainer/>
      </div>
    </Provider>
    
  );
}

export default App;
