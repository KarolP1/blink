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
      console.log({state: 'setting register state'});
      state.form = payload;
      console.log({state, payload});
    },
    resetRegisterState: (state: RegisterInterface) => {
      state = initialStateRegister;

      console.log(state);
    },
  },
  extraReducers: builder => {
    builder.addCase(registerUser.fulfilled, (state, {payload}) => {
      state.response = null;
      state.error = null;
      state.response = payload;
      state.succes = true;
      state.isLoading = false;
      console.log('fulfiled' + state);
    });
    builder.addCase(registerUser.rejected, (state, {payload}) => {
      state.error = null;
      state.response = null;
      state.succes = false;
      state.isLoading = false;
      state.error = payload;
      console.log('rejected' + state);
    });
    builder.addCase(registerUser.pending, state => {
      state.isLoading = true;
      console.log('pending' + state);
    });
  },
});
export const {setRegisterState, resetRegisterState} = RegisterSlice.actions;
export default RegisterSlice.reducer;
