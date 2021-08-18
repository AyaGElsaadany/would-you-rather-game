import { LOGIN } from '../actions/login'

function login (state = null, action) {
    switch (action.type) {
        case LOGIN:
            return action.id   
        default:
            return state
    }
}

export default login