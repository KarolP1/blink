import {formRegister, formLogin, initialStateLogin} from './types';
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'https://michal.networkmanager.pl/api/';

export const registerUser = createAsyncThunk<any, formRegister>(
  'users/registerUser',
  async (user, {rejectWithValue}) => {
    try {
      if (
        user.first_name === '' ||
        user.last_name === '' ||
        user.useremail === '' ||
        user.telephone === '' ||
        user.address === '' ||
        user.postal_code === '' ||
        user.password === '' ||
        user.confirm_pass === ''
      ) {
        return rejectWithValue('Not valid inputs');
      }
      if (user.password !== user.confirm_pass) {
        return rejectWithValue('passwords not mach');
      }
      const response = await axios.post('/signup_api', user);
      return response.data;
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
  },
);
export const loginUser = createAsyncThunk<
  {status: boolean; message: string; data: any},
  formLogin
>('users/loginUser', async (user, {rejectWithValue}) => {
  try {
    if (user.email === '' || user.user_pass === '') {
      return rejectWithValue('No data provided');
    }
    const {data} = await axios.post('/login_api', user);

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
