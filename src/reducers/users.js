import { RECEIVE_USERS, SAVE_USER_ANSWER, SAVE_USER_QUESTION } from '../actions/users'

export default function users(state= {}, action) {
    switch(action.type) {
        case RECEIVE_USERS :
            return {
                ...state,
                ...action.users
            }
        
        case SAVE_USER_QUESTION :
            return {
              ...state,
              [action.user] : {
                ...state[action.user],
                questions: [...state[action.user].questions, action.qid]
              }
            }

        case SAVE_USER_ANSWER :
            return {
                ...state,
                [action.user] : {
                ...state[action.user],
                answers : {
                    ...state[action.user].answers,
                    [action.qid] : action.ans
                }
                }
            }

        default :
            return state
    }
}