import React, {useState} from "react";

const TodoListItem = ({ text, id, onDelete }) => {
    const [isEditable, setEditState] = useState(false);
    const [currentText, setCurrentText] = useState(text);

    const handleDeleteClick = () => {
        onDelete && onDelete(id);
    }

    return (
        <div className="tasks-list__list-item">
            <li>{text}</li>
            <button onClick={handleDeleteClick}>Delete</button>
        </div>

    )
}

export default TodoListItem;