import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store';
import SignedInBG from '../../../../components/background/ImageBackgroundSIN';
import ProfileInfoPage from './componentsUser/ProfileInfoPage';
import UserBanner from '../../../../components/Profile/userBanner';
import InsideMenu from '../../../../components/Profile/InsideMenu/insideMenu';
import ProfileRecipesPage from './componentsUser/ProfileRecipesPage';

const ProfileRoot = () => {
  const [selected, setSelected] = useState<0 | 1 | 2 | 3 | 4>(0);

  const {response} = useSelector((state: RootState) => state.login);
  const user = response.data;

  return (
    <SignedInBG cantGoBack={true}>
      <UserBanner
        bannerImage={user.coverphoto}
        profileImage={user.dp}
        firstName={user.first_name}
        lastName={user.last_name}
      />
      <InsideMenu selected={selected} setSelected={setSelected} />
      {selected === 0 && <ProfileInfoPage />}
      {selected === 1 && <ProfileRecipesPage />}
      {selected === 2 && <ProfileInfoPage />}
      {selected === 3 && <ProfileInfoPage />}
      {selected === 4 && <ProfileInfoPage />}
    </SignedInBG>
  );
};

export default ProfileRoot;

const styles = StyleSheet.create({
  content: {
    margin: 22,
  },
});
