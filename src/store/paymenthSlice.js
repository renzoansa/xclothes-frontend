import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as paymentService from "../services/paymentService";
import { selectAllCartItems } from "./shared/cartSlice";
import * as paymentStatus from "../shared/paymentStatus";

const initialState = {
  paymentStatus: paymentStatus.idle,
  showCheckoutForm: false,
};

export const createPaymantIntent = createAsyncThunk(
  "payment/createPaymentIntent",
  ({ stripe, elements, CardElement, formData }, thunkAPI) => {
    const items = selectAllCartItems(thunkAPI.getState());
    return paymentService.createPaymantIntent(
      stripe,
      elements,
      CardElement,
      items,
      formData
    );
  }
);

const paymentSlice = createSlice({
  initialState,
  name: "payment",
  reducers: {
    paymentStatusUpdated: (state, action) => {
      state.paymentStatus = action.payload;
    },
    showCheckoutFormUpdated: (state, action) => {
      state.showCheckoutForm = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createPaymantIntent.pending, (state) => {
      state.paymentStatus = paymentStatus.loading;
    });
    builder.addCase(createPaymantIntent.fulfilled, (state) => {
      state.paymentStatus = paymentStatus.succeeded;
      state.showCheckoutForm = false;
    });
    builder.addCase(createPaymantIntent.rejected, (state) => {
      state.paymentStatus = paymentStatus.failed;
    });
  },
});

export const selectPaymentStatus = (state) => state.payment.paymentStatus;
export const selectShowCheckoutForm = (state) => state.payment.showCheckoutForm;

export const { paymentStatusUpdated, showCheckoutFormUpdated } =
  paymentSlice.actions;

export default paymentSlice.reducer;
