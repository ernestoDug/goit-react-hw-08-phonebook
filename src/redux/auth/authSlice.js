import { createSlice } from '@reduxjs/toolkit';
import { register, refreshUser, logIn, logOut } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

// успішне 
const fulfilder = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
};
// упішний вхід
const fulfilderRefUser = (state, action) => {
  state.user = action.payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
};
// успішний вихід
const fulfilderLogOUT = state => {
  state.user = { name: null, email: null };
  state.token = null;
  state.isLoggedIn = false;
};

// очикувач оновлення 
const pendingerRefresh = state => {
  state.isRefreshing = true;
};
// облощик
const rejector = state => {
  state.isRefreshing = false;
};

// аутoХосанки 
const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  extraReducers: builder => {
    builder
      .addCase(register.fulfilled, fulfilder)
      .addCase(logIn.fulfilled, fulfilder)
      .addCase(logOut.fulfilled, fulfilderLogOUT)
      .addCase(refreshUser.fulfilled, fulfilderRefUser)
      .addCase(refreshUser.pending, pendingerRefresh)
      .addCase(refreshUser.rejected, rejector);

    //   [register.fulfilled](state, action) {
    //     state.user = action.payload.user;
    //     state.token = action.payload.token;
    //     state.isLoggedIn = true;
    //   },
    // *********************

    //   [logIn.fulfilled](state, action) {
    //     state.user = action.payload.user;
    //     state.token = action.payload.token;
    //     state.isLoggedIn = true;
    //   },
    // ******************************************
    //   [logOut.fulfilled](state) {
    //     state.user = { name: null, email: null };
    //     state.token = null;
    //     state.isLoggedIn = false;
    //   },
    // ************************************
    //   [refreshUser.fulfilled](state, action) {
    //     state.user = action.payload;
    //     state.isLoggedIn = true;
    //     state.isRefreshing = false;
    // *****************************************
    //   [refreshUser.pending](state) {
    //     state.isRefreshing = true;
    //   },
    //   },
    // *****************************
    //   [refreshUser.rejected](state) {
    //     state.isRefreshing = false;
    //   },
    // *************************************
  },
});

export const authReducer = authSlice.reducer;
