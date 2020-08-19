import { createStore } from 'redux';
import cakeReducer from './cake/cakeReducer';

// create redux store
// @params: Takes in the reducer we created
const store = createStore(cakeReducer);

export default store;