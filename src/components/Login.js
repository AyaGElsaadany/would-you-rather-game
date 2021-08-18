import React, { Component } from 'react'
import { Form, Button } from 'react-bootstrap'
import {connect} from 'react-redux'
import {handleInitialData, handleLogin} from '../actions/shared'
import LoadingBar from 'react-redux-loading' 

class Login extends Component {
    state ={
        user : ''
    }

    componentDidMount(){
        this.props.dispatch(handleInitialData())
    }

    onChange = (e) => {
        this.setState({
            user: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
       
        if (this.props.users) {
            //let user = this.state.user > -1 ? this.state.user : 1
            this.props.dispatch(handleLogin(this.state.user))
        }
        else {
            alert("no users found")
        }
    }

    render() {
        console.log(this.props.users)
        return (
            <div>
                <LoadingBar/>
                <h1>please login to continue ...</h1>
                <Form onSubmit={this.onSubmit}>
                    <Form.Group>
                        <Form.Control as="select" size="lg" name="user" onChange={this.onChange} >
                            <option disabled>Choose One</option>
                            {this.props.users.map(id =>
                            (
                                <option key={id} value={id} >{id}</option>
                            ))}
                        </Form.Control>
                        <Button type="submit">Login</Button>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        users: Object.keys(state.users)
    }
}

export default connect(mapStateToProps)(Login)