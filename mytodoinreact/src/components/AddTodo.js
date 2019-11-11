import React, { Component } from 'react'

export class AddTodo extends Component {

    state = {
        title:''
    }

    // When something is typed in the input field we setState above via setting title: e.target. value
    onChange = (e) =>{
    
        this.setState({title: e.target.value 
        });
    }
    onSubmit = (e) => {
        e.preventDefault();
        // passes this function up
        this.props.addTodo(this.state.title)
        // clears the input field
        this.setState({title:''})
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
                 <input type='text'
                 name='title' 
                 style={{ flex: '10', padding: '5px'}}
                 value={this.state.title}
                 placeholder='Add new Todo...'
                 onChange={this.onChange}
                 />  
                 <input 
                 type='submit' 
                 value='Submit' 
                 className='btn'
                 style={{flex:'1'}}

                 />  
                </form>
            </div>
        )
    }
}

export default AddTodo
