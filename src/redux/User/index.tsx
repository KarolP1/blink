import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {
  addUserAllergies,
  deleteAllergies,
  getUserAllergies,
  updateAllergy,
} from './thunks';
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
    //#region get all allergies
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
    //#endregion
    //#region get all allergies
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
    //#endregion
    //#region delete allergy
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
    //#endregion
    //update allergy
    builder.addCase(updateAllergy.fulfilled, (state, action) => {
      state.allergiess = action.payload.data;
      state.isLoading = false;
    });
    builder.addCase(updateAllergy.rejected, (state, {payload}) => {
      state.error = payload;
      state.isLoading = false;
    });
    builder.addCase(updateAllergy.pending, state => {
      state.isLoading = true;
    });
  },
});
export const {setUserId, setUserSubscription} = UserSlice.actions;
export default UserSlice.reducer;
