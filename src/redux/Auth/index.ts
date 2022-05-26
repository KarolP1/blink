import {RootState} from './../store';
import {createSlice} from '@reduxjs/toolkit';
import {useSelector} from 'react-redux';

const initialState = {
  isLoggedIn: false,
};
const AuthSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    logIn: state => {
      state.isLoggedIn = true;
    },
    logOut: state => {
      state.isLoggedIn = false;
    },
  },
});
export const {logIn, logOut} = AuthSlice.actions;
export default AuthSlice.reducer;
