import {
  createEntityAdapter,
  createSlice,
  createSelector,
} from "@reduxjs/toolkit";

const cartAdapter = createEntityAdapter({
  selectId: (clothing) => clothing.clothingId,
});

const initialState = cartAdapter.getInitialState();

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    itemAdded: (state, action) => {
      const clothingId = action.payload;

      if (!state.entities[clothingId]) {
        cartAdapter.addOne(state, { clothingId, quantity: 1 });
        return;
      }

      state.entities[clothingId].quantity++;
    },
    itemRemoved: (state, action) => {
      const clothingId = action.payload;
      if (state.entities[clothingId].quantity === 1) {
        cartAdapter.removeOne(state, clothingId);
        return;
      }
      state.entities[clothingId].quantity--;
    },
  },
});

const cartSelectors = cartAdapter.getSelectors((state) => state.cart);

export const { selectAll: selectAllCartItems } = cartSelectors;

export const selectCartItemsCount = createSelector(
  selectAllCartItems,
  (cartItems) => {
    let totalItems = 0;

    cartItems.forEach((cartItem) => {
      totalItems = totalItems + cartItem.quantity;
    });

    return totalItems;
  }
);

const { itemAdded, itemRemoved } = cartSlice.actions;

const selectClothesEntities = (state) => state.clothes.entities;

export const selectTotalCheckout = createSelector(
  selectAllCartItems,
  selectClothesEntities,
  (cartItems, clothes) => {
    let totalCheckout = 0;

    cartItems.forEach((cartItem) => {
      if (!clothes[cartItem.clothingId]) return;

      totalCheckout =
        cartItem.quantity * clothes[cartItem.clothingId].priceInDollarCents +
        totalCheckout;
    });

    return totalCheckout;
  }
);

export const addItem = (clothingId) => (dispatch) => {
  dispatch(itemAdded(clothingId));
};

export const removeItem = (clothingId) => (dispatch) => {
  dispatch(itemRemoved(clothingId));
};

export default cartSlice.reducer;
