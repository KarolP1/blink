import {
  Alert,
  Image,
  ImageSourcePropType,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {OrderPages} from '../../Pages/sinHomepage/pagesViews/Order/order';

export const MenuSelector4 = () => {
  const navigation = useNavigation<OrderPages>();
  return (
    <View>
      <View style={styles.gridRow}>
        <MenuSelectorOption
          name="Restaurants"
          icon={require('../../assets/utilityIcons/Order/foodtruck.png')}
          onClick={() =>
            navigation.navigate('OrderSubPages', {screen: 'Order_Restaurants'})
          }
        />
        <MenuSelectorOption
          name="Food-Trucks"
          icon={require('../../assets/utilityIcons/Order/restaurants.png')}
          onClick={() =>
            navigation.navigate('OrderSubPages', {screen: 'Order_FoodTrucks'})
          }
        />
      </View>
      <View style={styles.gridRow}>
        <MenuSelectorOption
          name="Local Cooks"
          icon={require('../../assets/utilityIcons/Order/localcook.png')}
          onClick={() =>
            navigation.navigate('OrderSubPages', {screen: 'Order_LocalCooks'})
          }
        />
        <MenuSelectorOption
          name="Shoops"
          icon={require('../../assets/utilityIcons/Order/store.png')}
          onClick={() =>
            navigation.navigate('OrderSubPages', {screen: 'Order_Shoops'})
          }
        />
      </View>
    </View>
  );
};

export const MenuSelectorOption = ({
  name,
  icon,
  onClick,
}: {
  name: string;
  icon: ImageSourcePropType;
  onClick?: () => void;
}) => {
  return (
    <TouchableOpacity style={[styles.gridItem]} onPress={onClick}>
      <View style={[styles.cardContainer]}>
        <Image style={styles.Image} source={icon} />
        <Text style={styles.text}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
  },
  gridItem: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flex: 1,
    aspectRatio: 1,
    width: 100,
    height: 100,
    borderRadius: 10,
    shadowColor: 'rgba(0,0,0,0.65)',
    shadowOpacity: 0.8,
    shadowRadius: 2,
    shadowOffset: {
      height: 8,
      width: 0,
    },
    margin: 5,
    elevation: 5,
  },
  Image: {
    width: 80,
    height: 80,
  },
  text: {
    color: '#FFF',
  },
  cardContainer: {
    borderRadius: 16,
    overflow: 'hidden',
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
  },
});
