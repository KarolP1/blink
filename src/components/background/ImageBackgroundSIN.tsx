import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {ReactNode, useEffect, useState} from 'react';
import BackIcon from '../../Icons/backicon';
import {useNavigation} from '@react-navigation/native';
import {SafeAreaView} from 'react-native-safe-area-context';

const SignedInBG = ({
  children,
  cantGoBack,
  woMenu,
}: {
  children: ReactNode;
  cantGoBack?: boolean;
  woMenu?: boolean;
}) => {
  const navigation = useNavigation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  navigation.addListener('focus', () => {
    setIsMenuOpen(false);
  });

  return (
    <ImageBackground
      style={styles.background}
      source={require('../../assets/background.png')}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <View style={styles.SideOptions}>
            {cantGoBack !== true && navigation.canGoBack() && (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <BackIcon />
              </TouchableOpacity>
            )}
          </View>
          <Image
            style={styles.logo}
            source={require('../../assets/BLINKFIX.png')}
          />
          <TouchableOpacity
            style={styles.SideOptions}
            onPress={() => setIsMenuOpen(!isMenuOpen)}>
            <Text>menu </Text>
          </TouchableOpacity>
        </View>
        <SafeAreaView style={styles.content}>
          <ScrollView>{children}</ScrollView>
        </SafeAreaView>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default SignedInBG;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },

  logo: {
    flex: 1,
    height: 35,
    resizeMode: 'center',
  },
  header: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  SideOptions: {
    width: 44,
    aspectRatio: 1,
  },
  content: {
    flex: 1,
    width: '100%',
    padding: 0,
    paddingTop: 0,
    marginBottom: 100,
  },
});
