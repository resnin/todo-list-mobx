import React from 'react';
import Filter from "./Filter";
import TodoList from "./TodoList";
import AddTodo from "./AddTodo";
import '../App.scss';

const Content = () => {
    return (
        <div className='content'>
            <Filter/>
            <AddTodo/>
            <TodoList/>
        </div>
    );
};

export default Content;