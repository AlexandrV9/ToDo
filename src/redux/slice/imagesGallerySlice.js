import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    imageName: '',
    images: [],
    totalImages: 0,
    error: '',
    loading: false,
    page: 10,
}

export const imagesGallerySlice = createSlice({
    name: 'imagesGallery',
    initialState,
    reducers: {
        SEARCH_IMAGES_START: (state, action) => {
            return {
                ...state,
                loading: true,
                imageName: action.payload.imageName || state.imageName,
            }
        },
        SEARCH_IMAGES_SUCCESS: (state, action) => {
            return {
                ...state,
                loading: false,
                images: action.payload.images,
                totalImages: action.payload.totalImages,
            }
        },
        SEARCH_IMAGES_ERROR: (state, action) => {
            return {
                ...state,
                loading: false,
                images: [],
                totalImages: 0,
                error: action.payload,
            }
        }
    }
})

export const {
    SEARCH_IMAGES_START,
    SEARCH_IMAGES_SUCCESS,
    SEARCH_IMAGES_ERROR
} = imagesGallerySlice.actions;

export default imagesGallerySlice.reducer;