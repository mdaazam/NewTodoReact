import React, { Component } from 'react';
import {BrowserRouter, Route, Redirect, Switch} from 'react-router-dom';
import axios from 'axios';
import './App.css';
import NavBar from './NavBar';
import Home from './Home';
import Todos from './Todos';
import Todo from './Todo';
import NotFound from './NotFound';

export default class App extends Component  {
  constructor(props){
    super(props);
    this.state={
      users: [],
      user: {}
    }
  }

  componentDidMount(){
    axios.get(`https://jsonplaceholder.typicode.com/todos`)
    .then(res => {
     res.data.length = 10
      const users = res.data;
      this.setState({users})
    })
  }
  addPerson = (user) => {
    const users = this.state.users.filter(item => item.id != user.id)
      this.setState({
        ...this.state,
        users: [ 
          ...users,
          user
        ]
      }) 
}
  render(){
    return (
      <div className="App">
        <BrowserRouter>
          <NavBar />
          <div>
            <Switch>
              <Route exact path="/" component={() => <Redirect to="/home" />} />
              <Route path="/home" component={Home} />
              <Route path="/todos" component={() => <Todos users={this.state.users} />} />
              <Route path="/todo" component={(props)=> <Todo addPerson={this.addPerson} user={{ userId: '', Id: '', Title: '', Completed: "" }}/>}  />
              <Route path="/edit/:id" component={(props)=> <Todo addPerson={this.addPerson} user={this.state.users.find(user => user.id == props.match.params.id)} />}  />
              <Route component={NotFound} />
            </Switch>  
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

