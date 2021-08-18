//import {_saveQuestion, _getQuestions, _saveQuestionAnswer} from '../utils/_DATA'
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS'
export const SAVE_QUESTION_ANSWER = 'SAVE_QUESTION_ANSWER'
export const SAVE_QUESTION = 'SAVE_UESTION'

export function receiveQuestions(questions){
    return{
        type : RECEIVE_QUESTIONS,
        questions
    }
}

export function saveQuestion(question) {
    return {
        type: SAVE_QUESTION,
        question
    }
}

export function saveQuestionAnswer (currentUser, qid, ans) {
    return {
      type: SAVE_QUESTION_ANSWER,
      currentUser,
      qid,
      ans
    }
  }

// export const getQuestions = () => (dispatch) => {
//     _getQuestions().then(questions => {
//         dispatch({
//             type :GETQUESTIONS,
//             questions
//         })
//     })
// } 

// export const saveQuestion = (question) => (dispatch) => {
//     _saveQuestion(question).then(newQuestion => {
//         dispatch({
//             type : SAVEQUESTION,
//             newQuestion
//         })
//     })
// }

// //answer : { authedUser, qid, answer }
// export const saveAnswer = (answer) => (dispatch)=> {
//     _saveQuestionAnswer(answer).then(answer => {
//         dispatch({
//             type : SAVEANSWER,
//             answer
//         })
//     })
// }