import { configureStore } from "@reduxjs/toolkit";
import ThemeReducer from '../themeSlice/ThemeSlice'
import LanguageReducer from '../languageSlice/LanguageSlice'


export const Store = configureStore({
    reducer:{
    theme : ThemeReducer ,
    language : LanguageReducer
    }
})


export default Store;