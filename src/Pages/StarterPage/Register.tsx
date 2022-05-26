import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import InputForm from '../../components/InputForm';
import {Button} from 'react-native';
import Auth from './auth';
import {useNavigation, useRoute} from '@react-navigation/native';
import {AuthScreenProp} from '.';
import {formRegister, initialStateRegister} from '../../redux/Auth/types';
import {useDispatch, useSelector} from 'react-redux';
import {setRegisterState} from '../../redux/Auth/SignUp';
import {registerUser} from '../../redux/Auth/thunks';
import {RootState} from '../../redux/store';
import {useAppDispatch} from '../../redux/hooks';
import {Formik} from 'formik';
import {useForm, Controller} from 'react-hook-form';

const Register = () => {
  const route = useRoute<any>();
  const selectedSub = route.params;
  const [Step, setStep] = useState<0 | 1 | 2>(0);
  const [selected, setSelected] = useState<{name: string}>(selectedSub);
  const [form, setForm] = useState<formRegister>(initialStateRegister.form);

  const data = useSelector((state: RootState) => state.register);

  useEffect(() => {
    setForm({...form, selectedItem: selected.name});
  }, [selected]);

  const dispatch = useAppDispatch();
  const handleChange = (name: string, value: any) => {
    setForm({...form, [name]: value});
  };

  const visibleStep = (step: 0 | 1 | 2) => {
    switch (step) {
      case 0:
        return (
          <>
            <InputForm
              valueForm={form.first_name || ''}
              placeholder="First name"
              name="first_name"
              handleChange={handleChange}
            />
            <InputForm
              valueForm={form.last_name || ''}
              placeholder="Last name"
              name="last_name"
              handleChange={handleChange}
            />
            <InputForm
              valueForm={form.useremail || ''}
              placeholder="Email"
              name="useremail"
              handleChange={handleChange}
            />
          </>
        );

      case 1:
        return (
          <>
            <InputForm
              valueForm={form.telephone || ''}
              placeholder="telephone"
              name="telephone"
              handleChange={handleChange}
            />
            <InputForm
              valueForm={form.address || ''}
              name="address"
              placeholder="Enter Address"
              handleChange={handleChange}
            />
            <InputForm
              valueForm={form.postal_code || ''}
              name="postal_code"
              placeholder="Postal Code"
              handleChange={handleChange}
            />
          </>
        );
      case 2:
        return (
          <>
            <InputForm
              valueForm={form.selectedItem || ''}
              name="selectedItem"
              placeholder="Select Usertype"
              handleChange={handleChange}
              injectedValue={selected}
              type="dropdown"
              setSelected={(name: string) => setSelected({name})}
            />
            <InputForm
              valueForm={form.password || ''}
              name="password"
              placeholder="Password"
              handleChange={handleChange}
              secured={true}
            />
            <InputForm
              valueForm={form.confirm_pass || ''}
              name="confirm_pass"
              placeholder="Confirm Password"
              secured={true}
              handleChange={handleChange}
            />
          </>
        );
      default:
        break;
    }
  };

  const menageStepUp = (props: {step: 0 | 1 | 2; direction: 'up' | 'down'}) => {
    if (props.direction === 'up') {
      switch (props.step) {
        case 0:
          setStep(1);
          break;
        case 1:
          setStep(2);
          break;

        default:
          break;
      }
    }
    if (props.direction === 'down') {
      switch (props.step) {
        case 1:
          setStep(0);
          break;
        case 2:
          setStep(1);
          break;

        default:
          break;
      }
    }
  };

  const navigation = useNavigation<AuthScreenProp>();

  return (
    <Auth>
      <View style={AuthStyles.Container}>
        <Text style={AuthStyles.FormTitle}>Join Us</Text>
        <Formik
          initialValues={initialStateRegister}
          onSubmit={() => {
            dispatch(setRegisterState({form}));
            dispatch(registerUser(form));
            // navigation.navigate('Login');
          }}>
          {visibleStep(Step)}
        </Formik>

        {Step === 2 ? (
          <View style={AuthStyles.StepContainer}>
            <View style={AuthStyles.ButtonContainer}>
              <Button
                color={'rgba(234, 54, 81, 1)'}
                title="Register"
                onPress={() => {
                  dispatch(setRegisterState({form}));
                  dispatch(registerUser(form));
                  // navigation.navigate('Login');
                }}
              />
            </View>
            <View style={AuthStyles.ButtonContainer}>
              <Button
                color={'rgba(77, 77, 77, 1)'}
                title="back"
                onPress={() => menageStepUp({step: Step, direction: 'down'})}
              />
            </View>
          </View>
        ) : (
          <View style={AuthStyles.StepContainer}>
            <View style={AuthStyles.ButtonContainer}>
              <Button
                color={'rgba(77, 77, 77, 1)'}
                title="next"
                onPress={() => menageStepUp({step: Step, direction: 'up'})}
              />
            </View>
            {Step !== 0 && (
              <View style={AuthStyles.ButtonContainer}>
                <Button
                  color={'rgba(77, 77, 77, 1)'}
                  title="back"
                  onPress={() => menageStepUp({step: Step, direction: 'down'})}
                />
              </View>
            )}
          </View>
        )}
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
    paddingVertical: 10,
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
