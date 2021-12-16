import React from "react";

import styles from './ImagesList.module.css';

const ImagesList = ({ images }) => {

    return (
        <div className={styles.container}>
            {images.map(image => (
                <div className={styles.imageCardWrapper}>
                    <div className={styles.imageWrapper}>
                        <img className={styles.image} alt={image.alt} src={image.url} />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ImagesList;