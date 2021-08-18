import { getInitialData, saveQuestionAPI, saveQuestionAnswerAPI } from '../utils/api'
import { recieveUsers, saveUserAnswer, saveUserQuestion } from './users'
import { receiveQuestions, saveQuestion, saveQuestionAnswer } from './questions'
import{login} from './login'
import {showLoading, hideLoading} from 'react-redux-loading'

//const AUTHES_ID = 'sarahedo'

export function handleLogin(currentUserId){
  return (dispatch) => {
    dispatch(login(currentUserId))
  }
}

export function handleInitialData() {
    return(dispatch) => {
        dispatch(showLoading())
        return getInitialData()
            .then(({ users, questions }) => {
                dispatch(recieveUsers(users))
                dispatch(receiveQuestions(questions))
                dispatch(hideLoading())
            })
    }
}

export function handleSaveQuestion (author, optionOneText, optionTwoText) {
    const question = {
      author,
      optionOneText,
      optionTwoText
    }
    return (dispatch) => {
      return saveQuestionAPI(question).then((question) => {
        dispatch(saveQuestion(question))
        dispatch(saveUserQuestion(question.author, question.id))
      })
    }
  }
  
  export function handleAnswer (currentUser, qid, ans) {
    return (dispatch) => {
      dispatch(saveQuestionAnswer(currentUser, qid, ans))
      dispatch(saveUserAnswer(currentUser, qid, ans))
      return saveQuestionAnswerAPI({
        authedUser: currentUser,
        qid,
        answer : ans
      })
    }
  }