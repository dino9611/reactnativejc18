import {combineReducers} from 'redux';
import {AuthReducer} from './authReducers';

export default combineReducers({
  Auth: AuthReducer,
});
