import { combineReducers } from 'redux';
import authReducer from './authReducer'; // Adjust the import path
import inventoryReducer from './inventoryReducer'; // Adjust the import path

const rootReducer = combineReducers({
  auth: authReducer,
  inventory: inventoryReducer,
});

export default rootReducer;
