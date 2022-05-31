import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
import {Allergy} from './types';

export const getUserAllergies = createAsyncThunk<
  {
    status: boolean;
    message: string;
    data: Allergy[];
  },
  {uid: number}
>('user/getUserAllergies', async ({uid}, {rejectWithValue}) => {
  try {
    if (uid === null || uid === undefined) {
      return rejectWithValue('No data provided');
    }
    const {data} = await axios.post('/my_all_allergies', {u_id: uid});

    if (data.status === false) {
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

export const addUserAllergies = createAsyncThunk<
  {
    status: boolean;
    message: string;
    data: Allergy[];
  },
  {uid: number | null; allergy_name: string}
>('user/addUserAllergies', async ({uid, allergy_name}, {rejectWithValue}) => {
  try {
    if (uid === null || uid === undefined) {
      return rejectWithValue('No data provided');
    }
    if (allergy_name === '') {
      return rejectWithValue('No data provided');
    }
    const {data} = await axios.post('/add_allergies', {
      u_id: uid,
      allergy_name,
    });

    if (data.status === false) {
      return rejectWithValue(data.message);
    }
    return data;
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
