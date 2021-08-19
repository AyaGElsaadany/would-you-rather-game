import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Card, Button, ProgressBar, Form, Badge} from 'react-bootstrap'
import Header from './Header'
import {handleAnswer} from '../actions/shared'

class Question extends Component {
    state ={
        ans : ''
    }

    handleOnChange = (e) => {
        this.setState({
            ans: e.target.value
        })
    }

    handleSumbit = (e) => {
        //currentuser. qid, ans
        e.preventDefault()
        console.log(this.props.users[this.props.currentUserId].answers)
        this.props.dispatch(handleAnswer(this.props.currentUserId, this.props.id, this.state.ans)) 
    }

    render() {
        const {questions, currentUserId, users, id} = this.props

        let voteop1 = '', voteop2 = '' ,totalVotes =''

        if(users[currentUserId].answers[id]){ 
            voteop1 = questions[id].optionOne.votes.length 
            voteop2 = questions[id].optionTwo.votes.length
            totalVotes = voteop1 + voteop2
        }

        if(questions[id] === undefined) {
            return (
                <div>
                    <h1>404</h1>
                    <p>The page not found</p>
                </div>
            )
        }

        return (
            <div>
                <Header/>
                { users[currentUserId].answers[id] ?
                    //answered
                    (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={`./${questions[id].author}.jpg`} alt={`${questions[id].author}`} />
                        <Card.Body>
                            <Card.Title>{questions[id].author} asks would you rather :</Card.Title>
                            <Card.Text>
                                {questions[id].optionOne.text}
                            </Card.Text>
                            {questions[id].optionOne.votes.includes(users[currentUserId].id) && (
                                <Badge pill bg="light" text="dark">voted</Badge>
                            )}
                            <ProgressBar now={(voteop1/totalVotes)*100} label={`${(voteop1/totalVotes)*100}%`} />
                            <p>{questions[id].optionOne.votes.length} of {questions[id].optionOne.votes.length + questions[id].optionTwo.votes.length}</p>
                            
                            <Card.Text>
                                {questions[id].optionTwo.text}
                            </Card.Text>
                            {questions[id].optionTwo.votes.includes(users[currentUserId].id) && (
                                <Badge pill bg="light" text="dark">voted</Badge>
                            )}
                            <ProgressBar now={(voteop2/totalVotes)*100} label={`${(voteop2/totalVotes)*100}%`} />
                            <p>{questions[id].optionTwo.votes.length} of {questions[id].optionOne.votes.length + questions[id].optionTwo.votes.length}</p>
                            
                            <Card.Text>
                                Your answer : {users[currentUserId].answers[id]}
                            </Card.Text>
                        </Card.Body>
                    </Card>


                    )
                     : 
                    //unanswered
                    (
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={`./${questions[id].author}.jpg`} alt={`${questions[id].author}`} />
                        <Card.Body>
                            <Card.Title>{questions[id].author} asks would you rather :</Card.Title>
                            <Card.Text>
                                <Form onSubmit={this.handleSumbit}>
                                    <Form.Group className="mb-3" controlId="formBasicRadio">
                                        <Form.Check type="radio" 
                                                    label={questions[id].optionOne.text} 
                                                    value='optionOne'
                                                    onChange={this.handleOnChange}/>
                                    
                                        <Form.Check type="radio" 
                                                    label={questions[id].optionTwo.text} 
                                                    value='optionTwo'
                                                    onChange={this.handleOnChange}/>
                                    </Form.Group>
                                    <Button variant="primary" type="submit" >
                                        Submit
                                    </Button>
                                </Form>
                            </Card.Text>
                            
                        </Card.Body>
                    </Card>
                    )
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    const id = window.location.pathname.split('/')[2]
    return{
        questions: state.questions,
        currentUserId: state.login,
        users: state.users,
        id,
    }
}

export default connect(mapStateToProps)(Question)
