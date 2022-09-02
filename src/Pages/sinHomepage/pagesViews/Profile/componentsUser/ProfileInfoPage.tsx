import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../../redux/store';
import BalanceSection from '../info/BalanceSection';
import InfoSection from '../info/InfoSection';
import AllergiessSection from '../info/AllergiessSection';
import {useAppDispatch, useAppSelector} from '../../../../../redux/hooks';
import {setUserId} from '../../../../../redux/User';
import ImageSection from '../info/ImageSection';
import FixSizeView from '../../../../../components/fixSizeView';

const ProfileInfoPage = () => {
  const {response} = useSelector((state: RootState) => state.login);
  const [subscription, setSubscription] = useState<string | null>(null);

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setUserId({id: response?.user?.id}));
  }, [response]);

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
          user={response?.businessData}
          editAction={() => {
            console.log('editing');
          }}
        />
      )}
      <InfoSection
        title="Your Data"
        user={response?.yourData}
        editAction={() => {
          console.log('editing');
        }}
      />
      <AllergiessSection />
      <ImageSection />
      <FixSizeView />
    </>
  );
};

export default ProfileInfoPage;

const styles = StyleSheet.create({});
