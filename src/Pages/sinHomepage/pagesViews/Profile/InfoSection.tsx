import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import SectionContainer from './Section';
import {ShadowFlex} from 'react-native-neomorph-shadows';
import {TextInput} from 'react-native-paper';
import _, {values} from 'lodash';
import {responseRegister} from '../../../../redux/Auth/types';

const InfoSection = ({
  user,
  title,
}: {
  user: any;
  editAction: () => void;
  title: string;
}) => {
  const {
    //user
    address,
    email,
    first_name,
    gender,
    last_name,
    postalcode,
    profession,
    user_status,
    username,
    dob, //TODO: upewnić się czy dostaje z resp
    business_name,
    company_name,
    vat_number,
    firstlineofaddress,
    secondlineofaddress,
    thirdlineofaddress,
    business_postalcode,
    business_town,
    business_country,
  } = user;

  const [isEditModeEnabled, setIsEditModeEnabled] = useState<boolean>(false);
  const [isEditModeEnabledBusines, setIsEditModeEnabledBusines] =
    useState<boolean>(false);

  const stateInitialYourData: responseRegister = {
    username,
    first_name,
    last_name,
    dob,
    email,
    address,
    postalcode,
    gender,
    profession,
    user_status,
  };
  const stateInitialBusinessData: responseRegister = {
    business_name,
    company_name,
    vat_number,
    firstlineofaddress,
    secondlineofaddress,
    thirdlineofaddress,
    business_postalcode,
    business_town,
    business_country,
  };

  const [editForm, setEditForm] = useState(stateInitialYourData);
  const [editFormBusiness, setEditFormBusiness] = useState(
    stateInitialBusinessData,
  );

  const ifFormHasChanges = () => {
    if (_.isEqual(editForm, stateInitialYourData)) {
      return false;
    } else return true;
  };

  return (
    <SectionContainer.Edit
      title={title}
      editAction={() => {
        title === 'Business Data'
          ? setIsEditModeEnabledBusines(!isEditModeEnabledBusines)
          : setIsEditModeEnabled(!isEditModeEnabled);
      }}
      isEditModeEnabled={
        title === 'Business Data' ? isEditModeEnabledBusines : isEditModeEnabled
      }
      ifFormHasChanges={ifFormHasChanges()}>
      {Object.entries(
        title === 'Business Data' ? editFormBusiness : editForm,
      ).map(([key, value], index) => {
        return (
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
              <View style={{position: 'relative'}}>
                <Text
                  style={{
                    textTransform: 'capitalize',
                    color: '#464646',
                    position: 'absolute',
                    top: -15,
                    right: 0,
                  }}>
                  {key?.split('_').join(' ')}
                </Text>
                {isEditModeEnabled || isEditModeEnabledBusines ? (
                  <TextInput
                    placeholder={value ? value?.split('_').join(' ') : key}
                    style={{
                      position: 'absolute',
                      textTransform: 'capitalize',
                      color: '#fff',
                      backgroundColor: 'transparent',
                      flex: 1,
                      height: 30,
                      top: -10,
                      width: '100%',
                    }}
                    value={editForm[key]}
                    onChangeText={text =>
                      title === 'Business Data'
                        ? setEditFormBusiness({
                            ...editFormBusiness,
                            [key]: text,
                          })
                        : setEditForm({...editForm, [key]: text})
                    }
                  />
                ) : (
                  <Text style={{textTransform: 'capitalize', color: '#fff'}}>
                    {value}
                  </Text>
                )}
              </View>
            </ShadowFlex>
          </View>
        );
      })}
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        {(isEditModeEnabled || isEditModeEnabledBusines) && (
          <TouchableOpacity
            style={{
              width: 160,
              height: 40,
              backgroundColor: '#464646',
              margin: 10,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
            }}
            onPress={() => {
              title === 'Business Data'
                ? console.log({editFormBusiness}) //TODO busiines data edit
                : console.log({editForm}); //TODO personal data edit
            }}>
            <Text style={{color: '#fff'}}>Submit changes</Text>
          </TouchableOpacity>
        )}
      </View>
    </SectionContainer.Edit>
  );
};

export default InfoSection;

const styles = StyleSheet.create({});
