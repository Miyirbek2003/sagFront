import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'


export const getCategory = createAsyncThunk('catSlice/getCategory', async (_, { dispatch }) => {
    const response = await axios.get('https://sag-admin.webclub.uz/api/categories')
    return dispatch(setCategory(response.data))
})

export const getSubCategory = createAsyncThunk('catSlice/getSubCategory', async (slug, { dispatch }) => {
    const response = await axios.get(`https://sag-admin.webclub.uz/api/sub-categories`, {
        params: {
            category_slug: slug
        }
    })
    return dispatch(setSubCategory(response.data))
})

export const getItems = createAsyncThunk('catSlice/getItems', async ({ sub_id, items }, { dispatch }) => {
    const response = await axios.get(`https://sag-admin.webclub.uz/api/products`, {
        params: {
            sub_category_id: sub_id,
            sub_category_slug: items,
        }
    })
    return dispatch(setItems(response.data))
})
export const getEmployer = createAsyncThunk('catSlice/getEmployer', async (_, { dispatch }) => {
    const response = await axios.get(`https://sag-admin.webclub.uz/api/employees`)
    return dispatch(setEmployer(response.data))
})



export const getReviews = createAsyncThunk('catSlice/getReviews', async (_, { dispatch }) => {
    const response = await axios.get(`https://sag-admin.webclub.uz/api/reviews`)
    return dispatch(setReviews(response.data))
})
const initialState = {
    category: [],
    subCategory: [],
    items: [],
    employer: [],
    reviews: [],
}

const catSlice = createSlice({
    name: 'catSlice',
    initialState,
    reducers: {
        setCategory: (state, { payload }) => {
            state.category = payload
        },
        setSubCategory: (state, { payload }) => {
            state.subCategory = payload
        },
        setItems: (state, { payload }) => {
            state.items = payload
        },
        setEmployer: (state, { payload }) => {
            state.employer = payload
        },
        setReviews: (state, { payload }) => {
            state.reviews = payload
        }
    },

})
export const { setCategory, setReviews, setSubCategory, setItems, setEmployer } = catSlice.actions
export default catSlice.reducer