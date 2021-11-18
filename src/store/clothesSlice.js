import {
  createAsyncThunk,
  createEntityAdapter,
  createSlice,
  createSelector,
} from "@reduxjs/toolkit";
import * as clothingCategoryService from "../services/clothingCategoryService";
import * as clothingService from "../services/clothingService";

const clothesAdapter = createEntityAdapter();

const initialState = clothesAdapter.getInitialState();

export const fetchClothesByCategoryId = createAsyncThunk(
  "clothes/fetchClothesByCategory",
  (categoryId) => clothingCategoryService.fetchClothesByCategory(categoryId)
);

export const fetchClothingById = createAsyncThunk(
  "clothes/fetchClothingById",
  (clothingId) => clothingService.getById(clothingId)
);

const clothesSlice = createSlice({
  name: "clothes",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchClothesByCategoryId.fulfilled, (state, action) => {
      clothesAdapter.upsertMany(state, action.payload);
    });
    builder.addCase(fetchClothingById.fulfilled, (state, action) => {
      clothesAdapter.upsertOne(state, action.payload);
    });
  },
});

const clothesSelectors = clothesAdapter.getSelectors((state) => state.clothes);

const { selectAll: selectAllClothes } = clothesSelectors;

export const { selectById } = clothesSelectors;

const selectClothesByCategoryId = (id) =>
  createSelector(selectAllClothes, (clothes) =>
    clothes.filter((clothe) => clothe.category === id)
  );

export const selectClothingIdsByCategoryId = (id) =>
  createSelector(selectClothesByCategoryId(id), (clothes) =>
    clothes.map((clothing) => clothing.id)
  );

export default clothesSlice.reducer;
