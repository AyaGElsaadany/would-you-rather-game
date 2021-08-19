import './App.css';
import {Route,BrowserRouter as Router} from 'react-router-dom'
import {connect} from 'react-redux'
import Home from './components/Home'
import newQuestion from './components/newQuestion'
import leaderBoard from './components/leaderBoard'
import Login from './components/Login'
import { Component } from 'react';
import Question from './components/question';

class App extends Component {
  render(){
    return (
      <div>
        { 
          this.props.currentUserId ? 
            <Router>
              <Route exact path='/' component={Home}/> 
              <Route path='/add' component={newQuestion}/> 
              <Route path='/leaderBoard' component={leaderBoard}/> 
              <Route path='/question/:id' component={Question}/>
            </Router>: <Login />
        }
        
      </div>
    );
  }
}

export default connect((state) => ({
  currentUserId : state.login  //userId
}))(App);
