import { combineReducers} from 'redux';
import search from './search'
import admin from './admin'
import user from './user'
export default combineReducers({
    search,
    admin,
    user,
   
})