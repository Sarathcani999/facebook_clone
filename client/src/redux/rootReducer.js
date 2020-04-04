import itemReducer from './items/itemReducer'
import authReducer from './auth/authReducer'
import errorReducer from './error/errorReducer'
import postReducer from './posts/postReducer'
import {combineReducers} from 'redux'

const rootReducer = combineReducers({
    item : itemReducer , auth : authReducer , error : errorReducer , post : postReducer
})

export default rootReducer