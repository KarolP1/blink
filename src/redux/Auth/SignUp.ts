import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {formRegister, initialStateRegister, RegisterInterface} from './types';
import {registerUser} from './thunks';

const RegisterSlice = createSlice({
  name: 'register ',
  initialState: initialStateRegister,
  reducers: {
    setRegisterState: (
      state: RegisterInterface,
      {payload}: PayloadAction<formRegister>,
    ) => {
      state.form = payload;
    },
    resetRegisterState: (state: RegisterInterface) => {
      state = initialStateRegister;
    },
  },
  extraReducers: builder => {
    builder.addCase(registerUser.fulfilled, (state, {payload}) => {
      state.response = null;
      state.error = null;
      state.response = payload;
      state.succes = true;
      state.isLoading = false;
    });
    builder.addCase(registerUser.rejected, (state, {payload}) => {
      state.error = null;
      state.response = null;
      state.succes = false;
      state.isLoading = false;
      state.error = payload;
    });
    builder.addCase(registerUser.pending, state => {
      state.isLoading = true;
    });
  },
});
export const {setRegisterState, resetRegisterState} = RegisterSlice.actions;
export default RegisterSlice.reducer;
