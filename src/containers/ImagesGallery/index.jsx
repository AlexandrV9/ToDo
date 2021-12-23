import React, { useCallback } from "react";
import { connect } from "react-redux";

import styles from './ImagesGallery.module.css';
import ImagesSearchForm from "../../components/ImagesGallery/ImagesSearchForm";
import ImagesList from "../../components/ImagesGallery/ImagesList";
import {searchImages} from "../../api/imageSearchAPI";
import {
    SEARCH_IMAGES_START,
    SEARCH_IMAGES_SUCCESS,
    SEARCH_IMAGES_ERROR,
} from "../../redux/slice/imagesGallerySlice";
import {useDispatch} from "react-redux";

const ImagesGallery = ({
    images,
    totalImages,
    loading,
    page,
}) => {

    const dispatch = useDispatch();

    const handleSubmitSearch = useCallback(
        async (imageName) => {

            if(loading) return;

            try {
                dispatch(SEARCH_IMAGES_START( { imageName } ));
                const imagesData = await searchImages(imageName, page);
                dispatch(SEARCH_IMAGES_SUCCESS({
                    images: imagesData.images,
                    totalImages: imagesData.total,
                }))
            } catch (error) {
                dispatch(SEARCH_IMAGES_ERROR(error.message))
            }

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

const mapStateToProps = ({
    imagesGallery: { imageName, images, totalImages, loading, page }
}) => ( { imageName, images, totalImages, loading, page } )

export default connect(mapStateToProps)(ImagesGallery);