import React, { useState } from "react";

import styles from './ImagesGallery.module.css';
import ImagesSearchForm from "../../components/ImagesGallery/ImagesSearchForm";
import ImagesList from "../../components/ImagesGallery/ImagesList";

const ImagesGallery = () => {

    const [images, setImages] = useState([]);
    const [totalImages, setTotalImages] = useState(0);

    return (
        <div className={styles.container}>
            <ImagesSearchForm
                setImages={setImages}
                setTotalImages={setTotalImages}
            />
            <ImagesList images={images} />
            {!!totalImages &&
                <div className={styles.totalImagesBox}>
                    Total images: {totalImages}
                </div>
            }

        </div>
    )
}

export default ImagesGallery;