import React, { useState } from 'react'

const ToDoForm = (props) => {

    const [inputUser, setInputUser] = useState('')
    
    const handleChange = e => {
        setInputUser(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 1000),
            text: inputUser
        })

        setInputUser('')
    }

   

    return (
        <form className="todo-form" onSubmit={handleSubmit}>
            <input
                type='text'
                placeholder='Aggiungi Task'
                value={inputUser} 
                name='text'
                className='todo-input'
                onChange={handleChange} />
            <button className='todo-button'>Add Task</button>
        </form>

    )
}

export default ToDoForm
