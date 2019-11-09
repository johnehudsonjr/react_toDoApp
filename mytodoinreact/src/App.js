import React, { Component } from 'react';
import Todos from './components/Todos'
import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Take out the trash',
        completed: false,
      },
      {
        id: 2,
        title: 'Dinner with wife',
        completed: true,
      },
      {
        id: 3,
        title: 'Dinner with boss',
        completed: false,
      }
    ]
  }

  markComplete = () => {
    console.log(" hello from app.js")
  }
  render(){
    console.log(this.state.todos)
  return (

    <div className="App">

        {/* This is passing our state down to our Todos component. Notice how it is using .notation from above ot do this.*/ }

         <Todos todos={this.state.todos} markComplete={this.markComplete}/>
    </div>

  );
}
}

export default App;
