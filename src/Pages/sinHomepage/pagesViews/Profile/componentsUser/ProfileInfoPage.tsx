import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../redux/store';
import BalanceSection from '../BalanceSection';
import InfoSection from '../InfoSection';
import AllergiessSection from '../AllergiessSection';

const ProfileInfoPage = () => {
  const {response} = useSelector((state: RootState) => state.login);
  const user = response.data;
  return (
    <>
      <BalanceSection balance={43.21} />
      <InfoSection
        user={user}
        editAction={() => {
          console.log('editing');
        }}
      />
      <AllergiessSection />
    </>
  );
};

export default ProfileInfoPage;

const styles = StyleSheet.create({});
