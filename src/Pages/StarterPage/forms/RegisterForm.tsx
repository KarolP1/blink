import {StyleSheet, Text, View, Button, TextInput, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Formik} from 'formik';
import {
  formRegister,
  initialStateRegister,
  initialStateRegisterForm,
  RegisterInterface,
} from '../../../redux/Auth/types';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {registerUser} from '../../../redux/Auth/thunks';
import {RegisterSchema} from './Shemas/registerSchema';
import InputForm from '../../../components/InputForm';
import {AuthStyles} from '../Register';
import {resetRegisterState, setRegisterState} from '../../../redux/Auth/SignUp';
import _ from 'lodash';
import {RootState} from '../../../redux/store';
import {useNavigation} from '@react-navigation/native';
import {AuthScreenProp} from '../../../App';

const RegisterForm = ({
  selected,
  setSelected,
}: {
  selected: {
    name: string;
  };
  setSelected: React.Dispatch<
    React.SetStateAction<{
      name: string;
    }>
  >;
}) => {
  const [Step, setStep] = useState<0 | 1 | 2>(0);
  const [form, setForm] = useState<formRegister>(initialStateRegister.form);

  const dispatch = useAppDispatch();

  const handleSubmit = (props: formRegister) => {
    setForm({...props, selectedItem: selected.name});
    setStep(0);
    return;
  };
  const data = useAppSelector((state: RootState) => state.register);
  const navigation = useNavigation<AuthScreenProp>();

  useEffect(() => {
    if (data.succes === true) {
      navigation.navigate('Login');
      Alert.alert(
        'Succes',
        'To use your account on BlinkFix, you need to confirm the email address.',
      );
    }
    dispatch(resetRegisterState());
    return;
  }, []);

  useEffect(() => {
    if (!_.isEqual(form, initialStateRegister.form)) {
      dispatch(setRegisterState(form)); //work
      dispatch(registerUser(form));
      setForm(initialStateRegisterForm);
      dispatch(resetRegisterState());
    }
  }, [form]);

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

  const state = useAppSelector(state => state.register);

  return (
    <View style={{width: '100%'}}>
      {!state.isLoading ? (
        <Formik
          initialValues={initialStateRegisterForm}
          onSubmit={(values, actions) => {
            handleSubmit(values);
            actions.setSubmitting(false);
          }}
          validationSchema={RegisterSchema}>
          {props => (
            <View>
              <Text>{JSON.stringify(props.errors)}</Text>
              {props.isSubmitting && <Text>loading</Text>}
              {Step === 0 && (
                <>
                  <InputForm
                    valueForm={props.values.first_name}
                    placeholder="First name"
                    name="first_name"
                    handleChange={props.handleChange('first_name')}
                  />
                  {props.errors.first_name && (
                    <Text>{props.errors.first_name}</Text>
                  )}
                  <InputForm
                    valueForm={props.values.last_name}
                    placeholder="Last name"
                    name="last_name"
                    handleChange={props.handleChange('last_name')}
                  />
                  {props.errors.last_name && (
                    <Text>{props.errors.last_name}</Text>
                  )}
                  <InputForm
                    valueForm={props.values.useremail}
                    placeholder="Email"
                    name="useremail"
                    handleChange={props.handleChange('useremail')}
                  />
                  {props.errors.useremail && (
                    <Text>{props.errors.useremail}</Text>
                  )}
                </>
              )}
              {Step === 1 && (
                <>
                  <InputForm
                    valueForm={props.values.telephone}
                    placeholder="telephone"
                    name="telephone"
                    handleChange={props.handleChange('telephone')}
                  />
                  {props.errors.telephone && (
                    <Text>{props.errors.telephone}</Text>
                  )}
                  <InputForm
                    valueForm={props.values.address}
                    name="address"
                    placeholder="Enter Address"
                    handleChange={props.handleChange('address')}
                  />
                  {props.errors.address && <Text>{props.errors.address}</Text>}
                  <InputForm
                    valueForm={props.values.postal_code}
                    name="postal_code"
                    placeholder="Postal Code"
                    handleChange={props.handleChange('postal_code')}
                  />
                  {props.errors.postal_code && (
                    <Text>{props.errors.postal_code}</Text>
                  )}
                </>
              )}
              {Step === 2 && (
                <>
                  <InputForm
                    valueForm={props.values.selectedItem}
                    name="selectedItem"
                    placeholder="Select Usertype"
                    handleChange={props.handleChange('selectedItem')}
                    injectedValue={selected}
                    type="dropdown"
                    setSelected={(name: string) => setSelected({name})}
                  />
                  <InputForm
                    valueForm={props.values.password}
                    name="password"
                    placeholder="Password"
                    handleChange={props.handleChange('password')}
                    secured={true}
                  />
                  {props.errors.password && (
                    <Text>{props.errors.password}</Text>
                  )}
                  <InputForm
                    valueForm={props.values.confirm_pass}
                    name="confirm_pass"
                    placeholder="Confirm Password"
                    secured={true}
                    handleChange={props.handleChange('confirm_pass')}
                  />
                  {props.errors.confirm_pass && (
                    <Text>{props.errors.confirm_pass}</Text>
                  )}
                </>
              )}
              {Step === 2 ? (
                <>
                  <View style={AuthStyles.StepContainer}>
                    <View style={AuthStyles.ButtonContainer}>
                      <Button
                        color={'rgba(234, 54, 81, 1)'}
                        title="Register"
                        onPress={props.handleSubmit}
                      />
                    </View>
                    <View style={AuthStyles.ButtonContainer}>
                      <Button
                        color={'rgba(77, 77, 77, 1)'}
                        title="back"
                        onPress={() =>
                          menageStepUp({step: Step, direction: 'down'})
                        }
                      />
                    </View>
                  </View>
                </>
              ) : (
                <View style={AuthStyles.StepContainer}>
                  <View style={AuthStyles.ButtonContainer}>
                    <Button
                      color={'rgba(77, 77, 77, 1)'}
                      title="next"
                      onPress={() =>
                        menageStepUp({step: Step, direction: 'up'})
                      }
                    />
                  </View>
                  {Step !== 0 && (
                    <View style={AuthStyles.ButtonContainer}>
                      <Button
                        color={'rgba(77, 77, 77, 1)'}
                        title="back"
                        onPress={() =>
                          menageStepUp({step: Step, direction: 'down'})
                        }
                      />
                    </View>
                  )}
                </View>
              )}
            </View>
          )}
        </Formik>
      ) : (
        <Text>Loading</Text>
      )}
    </View>
  );
};

export default RegisterForm;

const styles = StyleSheet.create({});
