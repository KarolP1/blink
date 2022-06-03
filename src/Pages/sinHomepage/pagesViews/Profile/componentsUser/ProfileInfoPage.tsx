import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../redux/store';
import BalanceSection from '../BalanceSection';
import InfoSection from '../InfoSection';
import AllergiessSection from '../AllergiessSection';
import {useAppDispatch, useAppSelector} from '../../../../../redux/hooks';
import {setUserId} from '../../../../../redux/User';
import ImageSection from '../ImageSection';

const ProfileInfoPage = () => {
  const {response} = useSelector((state: RootState) => state.login);
  const user = response?.data;
  const [subscription, setSubscription] = useState<string | null>(null);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setUserId({id: user?.id}));
  }, [user]);

  const userReducer = useAppSelector(state => state.user);

  useEffect(() => {
    setSubscription(userReducer.userSubscription);
  }, [userReducer]);
  return (
    <>
      <BalanceSection balance={43.21} />
      {subscription !== 'End User' && (
        <InfoSection
          title="Business Data"
          user={user}
          editAction={() => {
            console.log('editing');
          }}
        />
      )}
      <InfoSection
        title="Your Data"
        user={user}
        editAction={() => {
          console.log('editing');
        }}
      />
      <ImageSection />
      <AllergiessSection />
    </>
  );
};

export default ProfileInfoPage;

const styles = StyleSheet.create({});
