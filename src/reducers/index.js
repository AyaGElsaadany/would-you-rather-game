import {combineReducers} from 'redux' 
import login from './login'
import users from './users'
import questions from './questions'
import {loadingBarReducer} from 'react-redux-loading'

export default combineReducers({
    login,
    users,
    questions,
    loadingBar: loadingBarReducer
})