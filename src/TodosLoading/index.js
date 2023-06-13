import React from 'react';
import './TodosLoading.css';

function TodosLoading() {
    return (
        <div className='LoadingTodo-container'>
            <span
            className='LoadingTodo-completeIcon'></span>
            <p className='LoadingTodo-yext'></p>
            <span
            className='loadingTodo-deleteIcon'></span>
        </div>
    );
}

export { TodosLoading };