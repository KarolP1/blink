import {RootState} from '../store';
import {AsyncThunkAction, createSlice, PayloadAction} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';
import {formRegister, initialStateRegister, RegisterInterface} from './types';
import {registerUser} from './thunks';

const RegisterSlice = createSlice({
  name: 'register ',
  initialState: initialStateRegister,
  reducers: {
    setRegisterState: (
      state: RegisterInterface,
      {payload}: PayloadAction<{form: formRegister}>,
    ) => {
      state.form = payload.form;
    },
  },
  extraReducers: builder => {
    builder.addCase(registerUser.fulfilled, (state, {payload}) => {
      state = initialStateRegister;

      state.response = payload;
      state.succes = true;
    });
    builder.addCase(registerUser.rejected, (state, {payload}) => {
      state = initialStateRegister;
      state.response = payload;
      state.succes = false;
      state.error = payload;
    });
    builder.addCase(registerUser.pending, (state, {payload}) => {
      state = initialStateRegister;
      state.response = payload;
      state.succes = true;
    });
  },
});
export const {setRegisterState} = RegisterSlice.actions;
export default RegisterSlice.reducer;
