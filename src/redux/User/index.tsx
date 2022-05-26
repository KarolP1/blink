import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {getUserAllergies} from './thunks';
import {initialStateUser} from './types';

const UserSlice = createSlice({
  name: 'User',
  initialState: initialStateUser,
  reducers: {
    setUserId: (state, action: PayloadAction<{id: string}>) => {
      state.uid = action.payload.id;
    },
  },
  extraReducers: builder => {
    builder.addCase(getUserAllergies.rejected, (state, {payload}: any) => {
      //TODO fix getting allergies from thunk
      state.allergiess = payload;
    });
  },
});
export const {setUserId} = UserSlice.actions;
export default UserSlice.reducer;
