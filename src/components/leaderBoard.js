import React, { Component } from 'react'
import Header from './Header'
import {Card} from 'react-bootstrap'
import {connect} from 'react-redux'

class leaderBoard extends Component {
    render() {

        const { sortedUsers} = this.props

        return (
            <div>
                <Header/>
                leader Board

                {
                    sortedUsers.map(user => (
                        <Card style={{ width: '18rem' }} key={user.id}>
                            <Card.Img variant="top" src={user.avatarURL} />
                            <Card.Body>
                                <Card.Title>{user.name}</Card.Title>
                                <Card.Text>
                                    questions : {user.questions.length}
                                    <br />
                                    answers : {Object.keys(user.answers).length}
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    ))
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        users: state.users,
        sortedUsers : Object.values(state.users).sort((a, b) => {
            return (Object.keys(b.answers).length + b.questions.length) - (Object.keys(a.answers).length + a.questions.length)
        })
    }
}

export default connect(mapStateToProps)(leaderBoard)
