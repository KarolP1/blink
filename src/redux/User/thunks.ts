import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {Allergy} from './types';

export const getUserAllergies = createAsyncThunk<
  {
    status: boolean;
    message: string;
    data: Allergy[];
  },
  {uid: string}
>('user/getUserAllergies', async ({uid}, {rejectWithValue}) => {
  try {
    if (uid === '') {
      return rejectWithValue('No data provided');
    }
    const {data} = await axios.post('/my_all_allergies', {u_id: uid});

    if (data.status === false) {
      console.log(data.message);
      return rejectWithValue(data.message);
    }
    return data.data;
  } catch (err: any) {
    if (err.toJSON().message === 'Network Error') {
      return rejectWithValue({
        status: false,
        message: 'Network Connection Error',
        data: null,
      });
    }
    return rejectWithValue(err);
  }
});
