import {loginUser} from './thunks';
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
    builder.addCase(loginUser.fulfilled, (state, {payload}) => {
      console.log('fulfilled');
      state.isLoading = false;
      state.response = payload;
      state.succes = true;
    });

    builder.addCase(loginUser.pending, state => {
      console.log('pending');
      state.isLoading = true;
    });

    builder.addCase(loginUser.rejected, (state, {payload}) => {
      console.log('rejected');
      state.response = null;
      state.error = payload;
      state.succes = false;
      state.isLoading = false;
    });
  },
});
export const {setLoginState} = LoginSlice.actions;
export default LoginSlice.reducer;
