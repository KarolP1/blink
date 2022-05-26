import {configureStore} from '@reduxjs/toolkit';
import {compose} from 'redux';
import AuthSlice from './Auth';
import counterReducer from './test1';
import authReducer from './Auth';
import RegisterReducer from './Auth/SignUp';
import LoginReducer from './Auth/SignIn';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    register: RegisterReducer,
    login: LoginReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
