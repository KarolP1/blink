import {formRegister, formLogin, formEditUser, responseRegister} from './types';
import {createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios';
axios.defaults.baseURL = 'http://146.59.13.245:3000/api/v1/';

export const registerUser = createAsyncThunk<any, formRegister>(
  'users/registerUser',
  async (
    {
      first_name,
      last_name,
      name,
      email,
      phone_number,
      address,
      postal_code,
      password,
      confirm_pass,
      birth_year,
      userRole,
    },
    {rejectWithValue},
  ) => {
    try {
      if (
        first_name === '' ||
        last_name === '' ||
        email === '' ||
        name === '' ||
        phone_number === '' ||
        address === undefined ||
        address === null ||
        postal_code === '' ||
        password === '' ||
        confirm_pass === '' ||
        birth_year === ''
      ) {
        return rejectWithValue('Not valid inputs');
      }
      if (password !== confirm_pass) {
        return rejectWithValue('passwords not mach');
      }
      const user = {
        first_name,
        last_name,
        name,
        email,
        phone_number,
        address,
        postal_code,
        password,
        confirm_pass,
        birth_year,
        userRole,
      };
      const response = await axios.post('/user/register', user);
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
  {status: boolean; message: string; data: responseRegister},
  formLogin
>('users/loginUser', async (user, {rejectWithValue}) => {
  try {
    if (user.login === '' || user.password === '') {
      return rejectWithValue('No data provided');
    }
    console.log(user);
    const result: any = await axios.post('/user/login', {
      login: user.login,
      password: user.password,
    });
    console.log({test: result});

    console.log({result});

    return result;
  } catch (err: any) {
    console.log({err});
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
export const editUser = createAsyncThunk<
  {status: boolean; message: string; data: any},
  formEditUser
>('users/editUser', async (userDetails, {rejectWithValue}) => {
  try {
    const {data} = await axios.post('/login_api', userDetails);

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
