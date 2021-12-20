import React, { useCallback, useState} from "react";

import styles from './ImagesGallery.module.css';
import ImagesSearchForm from "../../components/ImagesGallery/ImagesSearchForm";
import ImagesList from "../../components/ImagesGallery/ImagesList";
import {searchImages} from "../../api/imageSearchAPI";

const ImagesGallery = () => {

    const [images, setImages] = useState([]);
    const [totalImages, setTotalImages] = useState(0);
    const [loading, setLoadingState] = useState(false);

    const handleSubmitSearch = useCallback(
        async (event) => {
            event.preventDefault();
            if(!(setImages && setTotalImages)) return;
            setLoadingState(true);
            const imagesData = await searchImages(event.target.imageName.value);
            setImages(imagesData.images);
            setTotalImages(imagesData.total);
            setLoadingState(false);

        },[loading]
    );

    return (
        <div className={styles.container}>
            <ImagesSearchForm
                onSubmit={handleSubmitSearch}
            />
            <ImagesList images={images} loading={loading}/>
            {!loading && !!totalImages &&
                <div className={styles.totalImagesBox}>
                    Total images: {totalImages}
                </div>
            }

        </div>
    )
}

export default ImagesGallery;