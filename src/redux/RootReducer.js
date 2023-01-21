import { combineReducers } from 'redux';
import AuthReducer from './reducers/AuthReducer';
import Reducer from "./reducers/Reducer";

const rootReducer = combineReducers({
   AuthReducer,
   Reducer
});
export default rootReducer;