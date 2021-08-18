import React, { Component } from 'react'
import Header from './Header'
import {Form, Button} from 'react-bootstrap'
import {handleSaveQuestion} from '../actions/shared'
import { connect } from 'react-redux'

class newQuestion extends Component {
    state={
        op1: '',
        op2: ''
    }

    handleOnChange = (e) => {
        if(e.target.name == "op1"){
            this.setState({
                op1: e.target.value
            })
        }else{
            this.setState({
                op2: e.target.value
            })
        }  
    }

    handleOnSubmit = (e) => {
        //author, optionOne, optionTwo
        e.preventDefault()
        this.props.dispatch(handleSaveQuestion(this.props.currentUserId, this.state.op1, this.state.op2))
        this.props.history.push('/')
    }

    render() {
        return (
            <div>
                <Header/>
                <Form onSubmit={this.handleOnSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Option One :</Form.Label>
                        <Form.Control type="text" placeholder="Enter 1st option ..." name="op1" onChange={this.handleOnChange}/>
                    </Form.Group>

                    <p> Or </p>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Option Two</Form.Label>
                        <Form.Control type="text" placeholder="Enter 2nd option ..." name="op2" onChange={this.handleOnChange}/>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        currentUserId: state.login,
        users: state.users,
    }
}

export default connect(mapStateToProps)(newQuestion)
