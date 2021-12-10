import React from "react";

import './AddTodoForm.module.css';

const AddTodoForm = ({ onAddTodo }) => {

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddTodo && onAddTodo(event.target.todo.value);
    }

    return (
        <form className="add-task-form"
              onSubmit={handleSubmit}
        >
            <input type="text"
                   className="add-task-form__task-input"
                   name="todo"
            />
            <button className="add-task-submit-button">
                Click me
            </button>
        </form>
    )
}

export default AddTodoForm;