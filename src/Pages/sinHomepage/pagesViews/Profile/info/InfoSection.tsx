import {Button, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import SectionContainer from './Section';
import {ShadowFlex} from 'react-native-neomorph-shadows';
import {TextInput} from 'react-native-paper';
import _, {values} from 'lodash';
import {
  IbusinessData,
  IyourData,
  responseRegister,
} from '../../../../../redux/Auth/types';
import DatePickerComponent from './DatePicker';
import {useAppDispatch} from '../../../../../redux/hooks';
import {editUser} from '../../../../../redux/Auth/thunks';

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
    username,
    first_name,
    last_name,
    dob,
    email,
    gender,
    profession,
    postalcode,
    town,
    country,
    address,
    business_name,
    company_name,
    vat_number,
    business_postalcode,
    business_town,
    business_country,
    business_address,
  } = user;

  const [isEditModeEnabled, setIsEditModeEnabled] = useState<boolean>(false);
  const [isEditModeEnabledBusines, setIsEditModeEnabledBusines] =
    useState<boolean>(false);

  const stateInitialYourData: IyourData = {
    username,
    first_name,
    last_name,
    dob,
    email,
    gender,
    profession,
    postalcode,
    town,
    country,
    address,
  };
  const stateInitialBusinessData: IbusinessData = {
    business_address,
    business_country,
    business_name,
    business_postalcode,
    business_town,
    company_name,
    vat_number,
  };

  const [editForm, setEditForm] = useState(stateInitialYourData);
  const [editFormBusiness, setEditFormBusiness] = useState(
    stateInitialBusinessData,
  );

  const dispatch = useAppDispatch();
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
      ifFormHasChanges={false}>
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
                    placeholder={
                      key === 'dob'
                        ? 'DD/MM/YYYY'
                        : value
                        ? value?.split('_').join(' ')
                        : key
                    }
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
              if (title === 'Business Data')
                console.log({editFormBusiness}); //TODO busiines data edit
              else console.log({editForm}); //TODO busiines data edit
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
