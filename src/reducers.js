import { combineReducers } from 'redux';

// Import reducers from containers...
import header from './containers/Header/reducers';

// ...Then combine them
const copasApp = combineReducers({
  header,
});

export default copasApp;
