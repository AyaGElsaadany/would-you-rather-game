import React, { Component } from 'react'
import { Navbar, Nav, Button, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import {login} from '../actions/login'

class Header extends Component {
    render() {

        const {users, curentUserId, login} = this.props

        return (
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#">Would You Rather Game</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/new">Add Question</Nav.Link>
                        <Nav.Link as={Link} to="/leaderBoard">Leaderboard</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Navbar.Text style={{ marginRight: "30px" }}>
                        <b>Logged in as :</b>{users[curentUserId].name}
                    </Navbar.Text>
                    <Image src={users[curentUserId].avatarURL} alt={users[curentUserId].avatarURL} roundedCircle style={{ width: "auto", height: 60, marginRight: "30px" }}></Image>
                    <Button onClick={() => login(null)}>Logout</Button>
                </Navbar.Collapse>
            </Navbar>
        )
    }
}

function mapStateToProps(state){
    return {
        curentUserId : state.login,
        users: state.users
    }
}

export default connect(mapStateToProps, {login})(Header)
