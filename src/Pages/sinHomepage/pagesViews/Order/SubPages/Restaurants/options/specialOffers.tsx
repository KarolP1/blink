import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {ISpecialOfers} from './SingleRestaurant';

const SpecialOffers = ({specialOffers}: {specialOffers: ISpecialOfers}) => {
  const {isHalal, isKosher, isVegan} = specialOffers;

  return (
    <View style={styles.bg}>
      {isKosher && (
        <Image
          style={styles.icon}
          source={require('../../../../../../../assets/utilityIcons/Order/restaurant/kosher.png')}
        />
      )}
      {isVegan && (
        <Image
          style={styles.icon}
          source={require('../../../../../../../assets/utilityIcons/Order/restaurant/vegan.png')}
        />
      )}
      {isHalal && (
        <Image
          style={styles.icon}
          source={require('../../../../../../../assets/utilityIcons/Order/restaurant/halal.png')}
        />
      )}
    </View>
  );
};

export default SpecialOffers;

const styles = StyleSheet.create({
  icon: {
    width: 35,
    height: 35,
  },
  bg: {
    flexDirection: 'row-reverse',
    paddingTop: 3,
    alignSelf: 'flex-end',
  },
});
