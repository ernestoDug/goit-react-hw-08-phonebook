import { createSlice } from '@reduxjs/toolkit';
import { register, refreshUser, logIn, logOut } from './operations';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isLoggedIn: false,
  isRefreshing: false,
};

// успішне лог та рег
const fulfilder = (state, { payload }) => {
  state.user = payload.user;
  state.token = payload.token;
  state.isLoggedIn = true;
  // console.log(payload.token);
};
// упішний вхід
const fulfilderRefUser = (state, { payload }) => {
  state.user = payload;
  state.isLoggedIn = true;
  state.isRefreshing = false;
  // console.log(payload.token);
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
      .addCase(register.rejected, rejector)
      .addCase(logIn.rejected, rejector)
      .addCase(logOut.rejected, rejector)
      .addCase(refreshUser.rejected, rejector);
  },
});

export const authReducer = authSlice.reducer;
