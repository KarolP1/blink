import {Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import InputForm from '../../components/InputForm';
import {AuthStyles} from './Register';
import Auth from './auth';
import {useNavigation} from '@react-navigation/native';
import {AuthScreenProp} from '.';
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';
import {setLoginState} from '../../redux/Auth/SignIn';
import {formLogin} from '../../redux/Auth/types';
import {loginUser} from '../../redux/Auth/thunks';
import {logIn} from '../../redux/Auth';
import {useAppDispatch} from '../../redux/hooks';
import {setUserSubscription} from '../../redux/User';

export interface APInterface {}
const initialState: formLogin = {
  email: 'platek549@gmail.com',
  user_pass: '12345678',
};

const Login = () => {
  const [form, setForm] = useState<formLogin>(initialState);
  const navigation = useNavigation<AuthScreenProp>();
  const dispatch = useAppDispatch();

  const state = useSelector((state: RootState) => state.login);
  console.log({state: state.response});

  useEffect(() => {
    if (state.succes === true) dispatch(logIn());
    if (state.response !== null)
      dispatch(setUserSubscription(state.response.data.user_status));
  }, [state]);

  const onPressFunctionality = () => {
    dispatch(setLoginState(form));
    dispatch(loginUser(form));
  };

  const handleChange = (name: string, value: string | number) => {
    setForm({...form, [name]: value});
  };

  return (
    <Auth>
      <View style={AuthStyles.Container}>
        <Text style={AuthStyles.FormTitle}>Login</Text>
        {state.isLoading === false ? (
          <>
            <InputForm
              placeholder="Email"
              name={'email'}
              handleChange={handleChange}
              valueForm={form.email}
            />
            <InputForm
              placeholder="Password"
              name={'user_pass'}
              handleChange={handleChange}
              secured={true}
              valueForm={form.user_pass}
            />
            {state.error ? (
              <View style={AuthStyles.ErrorContainer}>
                <Text style={AuthStyles.ErrorText}>{state.error}</Text>
              </View>
            ) : (
              <View>
                <Text></Text>
              </View>
            )}
            <View style={AuthStyles.ButtonContainer}>
              <TouchableOpacity onPress={onPressFunctionality}>
                <View
                  style={{
                    backgroundColor: 'rgba(234, 54, 81, 1)',
                    paddingHorizontal: 20,
                    paddingVertical: 10,
                    borderRadius: 5,
                  }}>
                  <Text style={{color: 'white'}}>Login</Text>
                </View>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <View>
            <Text>Loading</Text>
          </View>
        )}
        <TouchableOpacity
          style={AuthStyles.TextButton}
          onPress={() => {
            navigation.navigate('Subscription');
          }}>
          <Text style={{color: 'rgba(77,77,77,.9)'}}>
            Dont have account? Sign up there
          </Text>
        </TouchableOpacity>
      </View>
    </Auth>
  );
};

export default Login;
