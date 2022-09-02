import {loginUser, editUser} from './thunks';
import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {formLogin, initialStateLogin} from './types';

const LoginSlice = createSlice({
  name: 'Login',
  initialState: initialStateLogin,
  reducers: {
    setLoginState: (state, {payload}: PayloadAction<formLogin>) => {
      state.form = payload;
    },
  },

  extraReducers: builder => {
    //#region loginUser
    builder.addCase(loginUser.fulfilled, (state, {payload}) => {
      // state.isLoading = false;
      // state.response = payload.data;
      state.succes = true;
    });

    builder.addCase(loginUser.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(loginUser.rejected, (state, {payload}: {payload: any}) => {
      state.response = null;
      state.error = payload.message;
      state.succes = false;
      state.isLoading = false;
    });
    //#endregion
    //#region editUser

    builder.addCase(editUser.fulfilled, (state, {payload}) => {
      state.isLoading = false;
      // state.response = payload;
      state.succes = true;
    });

    builder.addCase(editUser.pending, state => {
      state.isLoading = true;
    });

    builder.addCase(editUser.rejected, (state, {payload}) => {
      state.response = null;
      state.error = payload;
      state.succes = false;
      state.isLoading = false;
    });
    //#endregion
  },
});
export const {setLoginState} = LoginSlice.actions;
export default LoginSlice.reducer;
