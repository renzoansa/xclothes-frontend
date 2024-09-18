import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./store/shared/userSlice";
import clothesReducer from "./store/clothesSlice";
import cartReducer from "./store/shared/cartSlice";
import storage from "redux-persist/lib/storage";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import paymentReducer from "./store/paymenthSlice";
import clothingCategoryReducer from "./store/clothingCategory";

const rootReducer = combineReducers({
  user: userReducer,
  clothes: clothesReducer,
  cart: cartReducer,
  payment: paymentReducer,
  clothingCategory: clothingCategoryReducer
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
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }),
  });
  let persistor = persistStore(store);

  return { store, persistor };
};

export default getStore;
