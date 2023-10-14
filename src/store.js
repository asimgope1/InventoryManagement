import { createStore, combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import inventoryReducer from './reducers/inventoryReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  inventory: inventoryReducer,
});

const store = createStore(rootReducer);

export default store;
