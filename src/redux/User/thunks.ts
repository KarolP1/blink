import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'http://146.59.13.245:3000/api/v1/';
import {Allergy} from './types';

//#region userAllegries
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
export const updateAllergy = createAsyncThunk<
  {
    status: boolean;
    message: string;
    data: Allergy[];
  },
  {a_id: number; u_id: number; a_name: string}
>('user/updateAllergy', async ({a_id, u_id, a_name}, {rejectWithValue}) => {
  try {
    const res = await axios.post('/update_allergies', {
      a_id,
      u_id,
      a_name,
    });
    console.log(res.data);
    if (res.data.status === false) {
      return rejectWithValue(res.data.message);
    }
    return res.data;
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
export const deleteAllergies = createAsyncThunk<
  {
    status: boolean;
    message: string;
    data: Allergy[];
  },
  {a_id: number; u_id: number}
>('user/deleteAllergy', async ({a_id, u_id}, {rejectWithValue}) => {
  try {
    const {data} = await axios.post('/remove_allergies', {
      a_id,
      u_id,
    });
    if (data.status === false) {
      return rejectWithValue(data.message);
    }
    console.log(data);
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
//#endregion
