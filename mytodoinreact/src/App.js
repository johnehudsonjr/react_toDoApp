import React, { Component } from 'react';
import Todos from './components/Todos'
import './App.css';
import Header from './components/layout/Header'
import AddTodo from './components/AddTodo'
import uuid from 'uuid'

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false,
      },
      {
        id: uuid.v4(),
        title: 'Dinner with wife',
        completed: false,
      },
      {
        id: uuid.v4(),
        title: 'Take out the trash',
        completed: false,
      }
    ]
  }
  
  // Toggle ToDo Complete
  markComplete = (id) => {
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })
  })
  }

// Delete Todo  
// filter will loop through and return new array.

  delTodo = (id) => {
    // loops through todos array using filter and where the todo.id does not equal the id deleted(clicked delete), adds it to array
   this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)]})
  }

  // add Todo

  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title:title,
      completed: false

    }
  this.setState({todos:[...this.state.todos, newTodo]})

  }

  render(){
    console.log(this.state.todos)
  return (

    <div className="App">
      <div className='container'>
        <Header/>
       <AddTodo addTodo={this.addTodo}/>
        {/* This is passing our state down to our Todos component. Notice how it is using .notation from above ot do this.*/ }

         <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}/>
         </div>
    </div>

  );
}
}

export default App;
