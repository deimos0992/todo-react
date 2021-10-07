import React, { useState } from 'react'
import ToDoForm from './ToDoForm'


const ToDoList = props => {
    const [todos, setTodos] = useState([])

    const addTodo = todo => {
        if (!todo.text || /^\s+$/.test(todo.test)) {
            return
        }

        const newTodos = [todo, ...todos]

        setTodos(newTodos)
        console.log(...todos)

    }


    return (
        <div>
            <h1>ToDo List</h1>
            <ToDoForm onSubmit={addTodo} />
        </div>
    )
}

export default ToDoList
