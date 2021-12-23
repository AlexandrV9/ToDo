import React from "react";

import styles from "./ImagesSearchForm.module.css";
import Input from "../../common/Input";
import Button from "../../common/Button";

const ImagesSearchForm = ({ onSubmit }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(event.target.imageName.value);
    }
    return (
        <form className={styles.imageSearchForm} onSubmit={handleSubmit}>
            <Input name="imageName" />
            <Button buttonText="Search" type="submit" />
        </form>
    )
}

export default ImagesSearchForm;