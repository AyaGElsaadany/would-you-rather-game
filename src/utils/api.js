import {_getUsers, _getQuestions, _saveQuestionAnswer, _saveQuestion} from './_DATA.js'
  
  export function getInitialData () {
    return Promise.all([
      _getUsers(),
      _getQuestions(),
    ]).then(([users, questions]) => ({
      users,
      questions,
    }))
  }
  
  export function saveQuestionAPI(question) {
    return _saveQuestion(question)
  }

  export function saveQuestionAnswerAPI(ansData) {
    return _saveQuestionAnswer(ansData)
  }
  
  