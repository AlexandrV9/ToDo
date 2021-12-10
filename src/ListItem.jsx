import React from "react";

const ListItem = ({ task , index, onDelete }) => {

    const handleDeleteClick = () => {
        if(!(onDelete && index >=0)) return;
        onDelete(index);
    }

    return (
        <div className="tasks-list__list-item">
            <li>{task}</li>
            <button onClick={handleDeleteClick}>Delete</button>
        </div>

    )
}

export default ListItem;