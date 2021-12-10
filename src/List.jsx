import React, { useState } from "react";

import ListItem from "./ListItem";
import './todo.css';

const List = () => {

    const [tasks, setTasks] = useState(['item1', 'item2']);

    const handleAddNewTask = (event) => {
        event.preventDefault();
        const newTask = event.target.task.value;
        setTasks(tasks => [...tasks, newTask]);
    }

    const handleTaskDelete = (index) => {
        setTasks(tasks => [...tasks.slice(0, index), ...tasks.slice(index + 1)])
    }

    return (
        <div className="container">

            <form className="add-task-form"
                  onSubmit={handleAddNewTask}
            >
                <input type="text"
                       className="add-task-form__task-input"
                       name="task"
                />
                <button className="add-task-submit-button">
                    Click me
                </button>
            </form>

            <div className="tasks-list">
                <h3 className="tasks-list__header">Tasks</h3>
                <ul className="tasks-list__list">
                    { Array.isArray(tasks) && tasks.map((task, index) =>
                        <ListItem key={index}
                                  task={task}
                                  index={index}
                                  onDelete={handleTaskDelete}
                        />
                    )}
                </ul>
            </div>


        </div>
    );

}

export default List;