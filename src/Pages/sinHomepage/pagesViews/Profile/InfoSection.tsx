import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import SectionContainer from './Section';
import {ShadowFlex} from 'react-native-neomorph-shadows';
import {TextInput} from 'react-native-paper';
import _ from 'lodash';
import {useAppDispatch} from '../../../../redux/hooks';
import {setUserId} from '../../../../redux/User';

const InfoSection = ({user}: {user: any; editAction: () => void}) => {
  const {
    address,
    email,
    first_name,
    gender,
    last_name,
    postalcode,
    profession,
    user_status,
    username,
    dateofbirth, //TODO: upewnić się czy dostaje z resp
  } = user;
  const [isEditModeEnabled, setIsEditModeEnabled] = useState(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setUserId({id: user.id}));
  }, [user]);
  console.log(user.id);
  const stateInitial = {
    username,
    first_name,
    last_name,
    dateofbirth,
    email,
    address,
    postalcode,
    gender,
    profession,
    user_status,
  };
  const [editForm, setEditForm] = useState(stateInitial);

  const ifFormHasChanges = () => {
    if (_.isEqual(editForm, stateInitial)) {
      return false;
    } else return true;
  };

  return (
    <SectionContainer.Edit
      title={'info'}
      editAction={() => setIsEditModeEnabled(!isEditModeEnabled)}
      isEditModeEnabled={isEditModeEnabled}
      ifFormHasChanges={ifFormHasChanges()}>
      {Object.entries(editForm).map((value, index) => (
        <View
          key={index}
          style={{
            overflow: 'hidden',
            marginVertical: 4,
          }}>
          <ShadowFlex
            inner
            style={{
              shadowOffset: {width: 0, height: 0},
              shadowOpacity: 0.5,
              shadowColor: 'black',
              shadowRadius: 3,
              borderRadius: 3,
              height: 40,
              paddingVertical: 3,
              paddingHorizontal: 6,
              justifyContent: 'center',
            }}>
            <>
              <Text style={{textTransform: 'capitalize', color: '#464646'}}>
                {value[0].split('_').join(' ')}
              </Text>
              {isEditModeEnabled ? (
                <TextInput
                  style={{
                    textTransform: 'capitalize',
                    color: '#fff',
                    backgroundColor: 'transparent',
                  }}
                  value={value[1]}
                  onChangeText={text =>
                    setEditForm({...editForm, [value[0]]: text})
                  }
                />
              ) : (
                <Text style={{textTransform: 'capitalize', color: '#fff'}}>
                  {value[1]}
                </Text>
              )}
            </>
          </ShadowFlex>
        </View>
      ))}
      {isEditModeEnabled && (
        <TouchableOpacity
          onPress={() => {
            console.log('first'); //TODO wstawic redux edit profile
          }}>
          <Text>Submit changes</Text>
        </TouchableOpacity>
      )}
    </SectionContainer.Edit>
  );
};

export default InfoSection;

const styles = StyleSheet.create({});
