import React from "react";

import TodoListItem from "../TodoListItem";

const TodosList = ({ todos, onDelete }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <TodoListItem
                    key={todo.id}
                    text={todo.text}
                    id={todo.id}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    )
}

export default TodosList;