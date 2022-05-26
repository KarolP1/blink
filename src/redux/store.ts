import {configureStore} from '@reduxjs/toolkit';
import counterReducer from './test1';
import authReducer from './Auth';
import RegisterReducer from './Auth/SignUp';
import LoginReducer from './Auth/SignIn';
import UserReducer from './User';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    register: RegisterReducer,
    login: LoginReducer,
    user: UserReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
