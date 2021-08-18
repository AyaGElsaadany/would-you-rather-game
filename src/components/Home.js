import React, { Component } from 'react'
import {Tabs, Tab} from 'react-bootstrap'
import UnansweredQuestions from './unansweredQuestions'
import AnsweredQuestions from './answeredQuestions'
import Header from './Header'
import {connect} from 'react-redux'


class Home extends Component {
    render() {
        const{users, questions, currentUserId} =this.props

        return (
            <div>
                <Header/>
                <Tabs defaultActiveKey="answered" className="mb-3">
                    <Tab eventKey="answered" title="Answered Questions">
                        <AnsweredQuestions ques={Object.values(questions).filter(q => users[currentUserId].answers[q.id])}/>
                    </Tab>
                    <Tab eventKey="unanswered" title="Unanswered Questions">
                        <UnansweredQuestions ques={Object.values(questions).filter(q => !users[currentUserId].answers[q.id])}/>
                    </Tab>
                </Tabs>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        users: state.users,
        currentUserId : state.login,
        questions : state.questions
    }
}

export default connect(mapStateToProps)(Home)