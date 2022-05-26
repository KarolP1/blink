import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

const DeliveryOptions = ({
  deliveryOptions,
}: {
  deliveryOptions: {isDelivery: boolean; isPickup: boolean};
}) => {
  return (
    <View style={styles.bg}>
      <Image
        style={styles.icon}
        source={require('../../../../../../../assets/utilityIcons/Order/restaurant/delivery.png')}
      />
      <Image
        style={styles.icon}
        source={require('../../../../../../../assets/utilityIcons/Order/restaurant/pickup.png')}
      />
    </View>
  );
};

export default DeliveryOptions;

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
