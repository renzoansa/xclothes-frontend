import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./store/shared/userSlice";
import clothesReducer from "./store/clothesSlice";
import cartReducer from "./store/shared/cartSlice";
import storage from "redux-persist/lib/storage";
import { persistStore, persistReducer } from "redux-persist";
import paymentReducer from "./store/paymenthSlice";

const rootReducer = combineReducers({
  user: userReducer,
  clothes: clothesReducer,
  cart: cartReducer,
  payment: paymentReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const getStore = () => {
  let store = configureStore({
    reducer: persistedReducer,
  });
  let persistor = persistStore(store);

  return { store, persistor };
};

export default getStore;
