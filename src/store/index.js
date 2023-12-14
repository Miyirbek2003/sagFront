import { configureStore } from '@reduxjs/toolkit'
import catSlice from './CategorySlice'
export const store = configureStore({
    reducer: {
        catSlice
    }
})
