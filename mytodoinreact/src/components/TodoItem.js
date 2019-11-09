import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class TodoItem extends Component {
// styling If completed is true - put a line through
    
    getStyle = () => {
       return {
           background:'blue',
           padding:'10px',
           borderBottom:'1px #ccc dotted',
        //    terrenary if completed is true? 'line-through' else: do this
           textDecoration: this.props.todo.completed ? 'line-through' : 'none'
       }
    }

    // markComplete = (e) => {
    //     console.log(this.props)

    // }

    render() {
        // destructuring so you do not have to write this.props.todo everytime
        const { id, title }= this.props.todo

        return (
             <div style={this.getStyle()}>
                <p>
                    <input type='checkbox' onChange={this.props.markComplete.bind(this, id)}/>
                    {title}</p>
            </div> 
      


        )
    }
}

// PropTypes
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}


export default TodoItem
