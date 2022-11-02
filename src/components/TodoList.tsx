import React, {useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import todo, {ITodo} from "../store/todo";
import '../App.scss';

const TodoList = observer(() => {
    let [filtered, setFiltered] = useState<ITodo[]>(todo.todos)

    useEffect(() => {
        if (todo.filter === 'All') {
            setFiltered(todo.todos)
        } else if (todo.filter === 'Completed') {
            setFiltered(todo.todos.filter(todo => todo.isCompleted))
        } else {
            setFiltered(todo.todos.filter(todo => !todo.isCompleted))
        }
    }, [todo.filter, todo.todos])


    return (
        <div className='todolist'>
            {filtered.map(t =>
                <div className={`todo ${t.isCompleted ? 'completed' : ''}`} key={t.id}>{t.title}
                    <div className='todo-buttons'>
                        <button
                            onClick={() => todo.completeTodo(t)}>{t.isCompleted ? 'Uncomplete' : 'Complete'}</button>
                        <button onClick={() => todo.removeTodo(t.id)}>Delete todo</button>
                    </div>
                </div>
            )}

        </div>
    );
});

export default TodoList;