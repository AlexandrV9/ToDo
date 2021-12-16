import React from "react";

import styles from "./ImagesSearchForm.module.css";
import Input from "../../common/Input";
import Button from "../../common/Button";
import { searchImages } from "../../../api/imageSearchAPI";

const ImagesSearchForm = ({ setImages, setTotalImages }) => {

    const handleSubmitSearch = async (event) => {
        event.preventDefault();
        if(!(setImages && setTotalImages)) return;

        const imagesData = await searchImages(event.target.imageName.value);
        setImages(imagesData.images);
        setTotalImages(imagesData.total);
    }

    return (
        <form className={styles.imageSearchForm} onSubmit={handleSubmitSearch}>
            <Input name="imageName" />
            <Button buttonText="Search" type="submit" />
        </form>
    )
}

export default ImagesSearchForm;