import React, { Component } from 'react'
import { connect } from 'react-redux'
import Header from './Header'

class Layout extends Component {
    render() {
        console.log(this.props.questions.length)
        return (
            this.props.questions  && this.props.curentUser ?
                <div>
                    <Header/>
                    <div>
                        {this.props.children}
                    </div>
                </div> : <h1>please wait</h1>
        )
    }
}

export default connect((state) => ({
    curentUser: state.login,
    questions: state.questions
}))(Layout)
