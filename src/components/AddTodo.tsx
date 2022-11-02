import React, {useState} from 'react';
import todo, {ITodo} from "../store/todo";
import '../App.scss';

const AddTodo = () => {
    let [value, setValue] = useState('')
    let newTodo: ITodo = {
        id: todo.todos.length + 1,
        title: value,
        isCompleted: false
    }

    function onSubmit() {
        value && todo.addTodo(newTodo);
        todo.changeFilter('All')
        setValue('')
    }
    return (
        <div className='addTodo'>
            <input type='text' value={value} onChange={(e) => setValue(e.target.value)}/>
            <button onClick={onSubmit}>Add todo</button>
        </div>
    );
};

export default AddTodo;