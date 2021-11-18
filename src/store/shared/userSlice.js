import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import * as userService from "../../services/userService";

const initialState = {
  currentUser: {
    name: null,
    email: null,
    id: null,
  },
  accessToken: {
    obtainingDate: null,
    token: null,
    secondsToExpire: null,
  },
  loginErrorMessage: null,
};

const logInUserThunk = createAsyncThunk(
  "user/logInUser",
  async (userCredentials, thunkAPI) => {
    const response = await userService.getAccessToken(
      userCredentials.email,
      userCredentials.password
    );
    thunkAPI.dispatch(accessTokenObtainingDateUpdated(Date.now()));
    return response;
  }
);

const refreshAccessTokenThunk = createAsyncThunk(
  "user/refreshAccessToken",
  async (_, thunkAPI) => {
    const response = await userService.refreshAccessToken();
    thunkAPI.dispatch(accessTokenObtainingDateUpdated(Date.now()));
    return response;
  }
);

const logOutUserThunk = createAsyncThunk("user/logOutUser", async () =>
  userService.revokeRefreshToken()
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    accessTokenObtainingDateUpdated(state, action) {
      const obtainingDate = action.payload;
      state.accessToken.obtainingDate = obtainingDate;
    },
    accessTokenRefreshed(state, action) {
      const { accessToken, user } = action.payload;
      state.accessToken.token = accessToken.token;
      state.accessToken.secondsToExpire = accessToken.secondsToExpire;
      state.currentUser = user;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(logInUserThunk.fulfilled, (state, action) => {
      const { user, accessToken } = action.payload;
      state.loginErrorMessage = null;
      state.currentUser = user;
      state.accessToken.token = accessToken.token;
      state.accessToken.secondsToExpire = accessToken.secondsToExpire;
    });
    builder.addCase(logInUserThunk.rejected, (state) => {
      state.loginErrorMessage = "Incorrect email or password";
    });
    builder.addCase(refreshAccessTokenThunk.fulfilled, (state, action) => {
      const { accessToken, user } = action.payload;
      state.accessToken.token = accessToken.token;
      state.accessToken.secondsToExpire = accessToken.secondsToExpire;
      state.currentUser = user;
    });
    builder.addCase(logOutUserThunk.fulfilled, (state) => {
      state.accessToken.token = null;
    });
  },
});

const { accessTokenObtainingDateUpdated } = userSlice.actions;

export const { accessTokenRefreshed } = userSlice.actions;

export const selectCurrentUser = (store) => store.user.currentUser;
export const selectAccessToken = (store) => store.user.accessToken;
export const selectLoginErrorMessage = (store) => store.user.loginErrorMessage;

export const logOutUser = () => logOutUserThunk();

export const logInUser = (userCredentials) => logInUserThunk(userCredentials);

export const refreshAccessToken = () => refreshAccessTokenThunk();

export default userSlice.reducer;
