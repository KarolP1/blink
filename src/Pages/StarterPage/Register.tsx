import {Alert, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import InputForm from '../../components/InputForm';
import {Button} from 'react-native';
import Auth from './auth';
import {useNavigation, useRoute} from '@react-navigation/native';
import {AuthScreenProp} from '.';
import {formRegister, initialStateRegister} from '../../redux/Auth/types';
import {useSelector} from 'react-redux';
import {resetRegisterState, setRegisterState} from '../../redux/Auth/SignUp';
import {registerUser} from '../../redux/Auth/thunks';
import {RootState} from '../../redux/store';
import {useAppDispatch} from '../../redux/hooks';
import {Formik} from 'formik';
import RegisterForm from './forms/RegisterForm';

const Register = () => {
  const route = useRoute<any>();
  const selectedSub = route.params;

  const [selected, setSelected] = useState<{name: string}>(selectedSub);

  const navigation = useNavigation<AuthScreenProp>();

  return (
    <Auth>
      <View style={AuthStyles.Container}>
        <Text style={AuthStyles.FormTitle}>Join Us</Text>

        <RegisterForm selected={selected} setSelected={setSelected} />

        <TouchableOpacity
          style={AuthStyles.TextButton}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          <Text style={{color: 'rgba(77,77,77,.9)'}}>
            Already have account? Sign in here.
          </Text>
        </TouchableOpacity>
      </View>
    </Auth>
  );
};

export default Register;

export const AuthStyles = StyleSheet.create({
  FormTitle: {
    width: '100%',
    fontSize: 24,
    paddingVertical: 5,
    paddingHorizontal: 20,
    color: '#fff',
  },
  ButtonContainer: {
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  Container: {
    alignItems: 'flex-end',
    margin: 10,
    marginVertical: 20,
  },
  TextButton: {
    width: '100%',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    paddingVertical: 10,
    marginHorizontal: 10,
  },

  StepContainer: {
    flexDirection: 'row-reverse',
    justifyContent: 'space-between',
    width: '100%',
  },
  ErrorContainer: {
    width: '100%',
    margin: 5,
  },
  ErrorText: {
    textAlign: 'center',
    color: '#EA3651',
  },
});
