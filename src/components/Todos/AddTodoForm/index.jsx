import React, {useState} from "react";

import styles from './AddTodoForm.module.css';

import Input from "../../common/Input";
import Button from "../../common/Button";

const AddTodoForm = ({ onAddTodo }) => {

    const [value, setValue] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onAddTodo && onAddTodo(event.target.todo.value);
    }

    const handleFieldChange = (event) => {
        setValue(event.target.todo);
    }

    return (
        <form className={styles.addTodoForm}
              onSubmit={handleSubmit}
        >
            <div>
                <Input
                    onChange={handleFieldChange}
                    name="todo"
                    value={value}
                />
            </div>
            <Button buttonText={'Add todo'} type="submit" />
        </form>
    )
}

export default AddTodoForm;