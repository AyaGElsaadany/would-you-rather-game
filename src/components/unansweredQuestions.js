import React, { Component } from 'react'
import {Button, ListGroup} from 'react-bootstrap'
import {connect} from 'react-redux'
import { Link } from 'react-router-dom'

class UnansweredQuestions extends Component {
    render() {
        const {ques} = this.props

        return (
            <div>
                <h1>Unanswered</h1>
                <ListGroup>
                {ques.map((q) => (
                    <ListGroup.Item key={q.id}>
                        <img src={`${q.author}.jpg`} alt={`${q.author}`}/>
                        <div>{q.author} asks would you rather : </div>
                        <div>{q.optionOne.text}</div> Or <div>{q.optionTwo.text}</div>
                        <Link to={`/question/${q.id}`}>
                            <Button variant="primary">View Question</Button>
                        </Link>
                    </ListGroup.Item>
                ))}
                </ListGroup>
            </div>
        )
    }
}

export default connect()(UnansweredQuestions)
