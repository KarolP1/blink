import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useLayoutEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store';
import SignedInBG from '../../../../components/background/ImageBackgroundSIN';
import ProfileInfoPage from './componentsUser/ProfileInfoPage';
import UserBanner from '../../../../components/Profile/userBanner';
import InsideMenu from '../../../../components/Profile/InsideMenu/insideMenu';
import ProfileRecipesPage from './Recipes/ProfileRecipesPage';
import FixSizeView from '../../../../components/fixSizeView';
import {useNavigation} from '@react-navigation/native';

const ProfileRoot = () => {
  const [selected, setSelected] = useState<0 | 1 | 2 | 3 | 4>(0);
  const [userSubscription, setUserSubscription] = useState<string | null>(null);
  const {login, user} = useSelector((state: RootState) => state);

  useEffect(() => {
    setUserSubscription(user.userSubscription);
  }, [user]);

  const UserFromDb = login.response;
  return (
    <SignedInBG cantGoBack={true}>
      <UserBanner
        bannerImage={UserFromDb?.user.coverphoto}
        profileImage={UserFromDb?.user.dp}
        firstName={UserFromDb?.user.first_name}
        lastName={UserFromDb?.user.last_name}
      />
      <Text style={{display: 'flex'}}>{userSubscription}</Text>
      <InsideMenu selected={selected} setSelected={setSelected} />
      {selected === 0 && <ProfileInfoPage />}
      {/* {selected === 1 && <ProfileRecipesPage />}
      {selected === 2 && <ProfileInfoPage />}
      {selected === 3 && <ProfileInfoPage />}
      {selected === 4 && <ProfileInfoPage />} */}
      <FixSizeView />
    </SignedInBG>
  );
};

export default ProfileRoot;

const styles = StyleSheet.create({
  content: {
    margin: 22,
  },
});
