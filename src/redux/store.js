import { configureStore } from "@reduxjs/toolkit";
import imagesGallerySlice from "./slice/imagesGallerySlice";

export default configureStore({
    reducer: {
        imagesGallery: imagesGallerySlice,
    }
})