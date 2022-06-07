import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {addUserAllergies, deleteAllergies, getUserAllergies} from './thunks';
import {initialStateUser} from './types';

const UserSlice = createSlice({
  name: 'User',
  initialState: initialStateUser,
  reducers: {
    setUserId: (state, action: PayloadAction<{id?: number}>) => {
      state.uid = action.payload.id || 0;
    },
    setUserSubscription: (
      state,
      {payload}: PayloadAction<string | undefined>,
    ) => {
      state.userSubscription = payload !== undefined ? payload : '';
    },
  },
  extraReducers: builder => {
    //get all allergies
    builder.addCase(getUserAllergies.fulfilled, (state, {payload}: any) => {
      state.isLoading = false;

      state.allergiess = payload;
    });
    builder.addCase(getUserAllergies.rejected, (state, {payload}: any) => {
      state.isLoading = false;

      state.error = payload;
    });
    builder.addCase(getUserAllergies.pending, state => {
      state.isLoading = true;
    });
    //get all allergies
    builder.addCase(addUserAllergies.fulfilled, (state, {payload}) => {
      state.allergiess = payload.data;
      state.isLoading = false;
    });
    builder.addCase(addUserAllergies.rejected, (state, {payload}: any) => {
      state.error = payload.data;
      state.isLoading = false;
    });
    builder.addCase(addUserAllergies.pending, state => {
      state.isLoading = true;
    });
    //delete allergy
    builder.addCase(deleteAllergies.fulfilled, (state, action) => {
      state.allergiess = action.payload.data;
      state.isLoading = false;
    });
    builder.addCase(deleteAllergies.rejected, (state, {payload}) => {
      state.error = payload;
      state.isLoading = false;
    });
    builder.addCase(deleteAllergies.pending, (state, action) => {
      state.isLoading = true;
    });
  },
});
export const {setUserId, setUserSubscription} = UserSlice.actions;
export default UserSlice.reducer;
