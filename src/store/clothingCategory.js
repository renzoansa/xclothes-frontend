import { createAsyncThunk, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import * as clothingCategoryService from "../services/clothingCategoryService";

const clothingCategoryAdapter = createEntityAdapter();

const initialState = clothingCategoryAdapter.getInitialState();

export const fetchClothingCategories = createAsyncThunk('clothingCategory/fetchClothingCategories', (clothingCategoryId) => clothingCategoryService.fetchClothesCategories(clothingCategoryId))

const clothingCategorySlice = createSlice({
  name: "clothes",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchClothingCategories.fulfilled, (state, action) => {
      clothingCategoryAdapter.upsertMany(state, action.payload);
    });
  },
});

export default clothingCategorySlice.reducer

export const { selectAll: selectAllClothingCategories } = clothingCategoryAdapter.getSelectors(state => state.clothingCategory)
