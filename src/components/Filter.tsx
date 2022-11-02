import React from 'react';
import todo from "../store/todo";
import '../App.scss';

const Filter = () => {
    return (
        <div className='filter'>
            <button onClick={() => todo.changeFilter('All')}>All</button>
            <button onClick={() => todo.changeFilter('Completed')}>Completed</button>
            <button onClick={() => todo.changeFilter('Uncompleted')}>Uncompleted</button>
        </div>
    );
};

export default Filter;