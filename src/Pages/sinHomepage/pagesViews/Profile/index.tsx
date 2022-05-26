import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import SignedInBG from '../../../../components/background/ImageBackgroundSIN';
import {useSelector} from 'react-redux';
import {RootState} from '../../../../redux/store';
import UserBanner from '../../../../components/Profile/userBanner';
import InsideMenu from '../../../../components/Profile/InsideMenu/insideMenu';
import BalanceSection from './BalanceSection';
import InfoSection from './InfoSection';
import AllergiessSection from './AllergiessSection';

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
      <BalanceSection balance={43.21} />
      <InfoSection
        user={user}
        editAction={() => {
          console.log('editing');
        }}
      />
      <AllergiessSection />
    </SignedInBG>
  );
};

export default ProfileRoot;

const styles = StyleSheet.create({
  content: {
    margin: 22,
  },
});
