import React from "react";

import styles from "./ImagesSearchForm.module.css";
import Input from "../../common/Input";
import Button from "../../common/Button";

const ImagesSearchForm = ({ onSubmit }) => {
    return (
        <form className={styles.imageSearchForm} onSubmit={onSubmit}>
            <Input name="imageName" />
            <Button buttonText="Search" type="submit" />
        </form>
    )
}

export default ImagesSearchForm;