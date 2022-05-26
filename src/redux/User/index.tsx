import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {initialStateUser} from './types';

const UserSlice = createSlice({
  name: 'User',
  initialState: initialStateUser,
  reducers: {},
});
export const {} = UserSlice.actions;
export default UserSlice.reducer;
