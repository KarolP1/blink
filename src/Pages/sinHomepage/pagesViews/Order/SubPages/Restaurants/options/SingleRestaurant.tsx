import {
  Button,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useState} from 'react';
import {SingleRestaurantType} from '../../../../../../../components/Maps';
import {geoProps} from '../RestaurantPages';
import ShadowContainer from '../../../../../../../components/shadow';
import {useNavigation} from '@react-navigation/native';
import {RestaurantNavigationProps, RestaurantsParams} from '..';
import {getDistanceBetweenPoints} from '../functions/calculations';
import SpecialOffers from './specialOffers';
import DeliveryOptions from './deliveryOptions';
import OpenHours from './openHours';
import Cuisines from './cuisines';
import LikeShere from './likeShere';

export type ISpecialOfers = {
  isKosher: boolean;
  isVegan: boolean;
  isHalal: boolean;
};
export type IDeliveryOptions = {
  isDelivery: boolean;
  isPickup: boolean;
};
const initialSpeciaOffers = {
  isHalal: true,
  isKosher: true,
  isVegan: true,
};
const initialDeliveryOptions = {
  isDelivery: true,
  isPickup: true,
};

const SingleRestaurant = ({
  restaurant,
  myLocation,
}: {
  restaurant: SingleRestaurantType;
  myLocation: geoProps;
}) => {
  const [specialOffers, setSpecialOfers] =
    useState<ISpecialOfers>(initialSpeciaOffers);
  const [deliveryOptions, setDeliveryOptions] = useState<IDeliveryOptions>(
    initialDeliveryOptions,
  );
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [openHoursString, setOpenHours] = useState<string>('');

  const navigation = useNavigation<RestaurantNavigationProps>();
  const distance = getDistanceBetweenPoints(myLocation, {
    latitude: restaurant.latitude,
    longitude: restaurant.longitude,
  });

  return (
    <View style={styles.RestaurantContainer}>
      <View style={styles.BannerContainer}>
        <View style={styles.options}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <LikeShere isLiked={isLiked} setIsLiked={setIsLiked} />
            <View style={styles.options1st}>
              <SpecialOffers specialOffers={specialOffers} />
              <DeliveryOptions deliveryOptions={deliveryOptions} />
            </View>
          </View>
          <Cuisines restaurant={restaurant} />
          <OpenHours restaurant={restaurant} setOpenHours={setOpenHours} />
        </View>
        <Image
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            margin: 0,
            zIndex: -10,
          }}
          source={require('../../../../../../../assets/banner.png')}
        />
      </View>
      <View style={styles.info}>
        <View style={styles.profilePic}>
          <Image
            style={{width: 60, aspectRatio: 3}}
            source={{
              uri: 'http://images.squarespace-cdn.com/content/v1/5cf3f95f1bd6ab00011380ac/1559492991919-ZNLMVL09XIHA7L6EE7IP/DUNES+LOGO+final+WHITE.png',
            }}
          />
        </View>
        <View style={styles.data}>
          <Text style={styles.title}>{restaurant.Business_Name}</Text>
          <Text style={styles.distance}>{`${distance} km away`}</Text>

          <TouchableOpacity
            onPress={() =>
              navigation.navigate('RestaurantPage', {
                restaurant: restaurant,
                deliveryOptions: deliveryOptions,
                openHoursConverted: openHoursString,
                specialOffer: specialOffers,
              })
            }>
            <ShadowContainer
              backgroundColor="#EA3651"
              shadowColor="#000"
              width={90}
              height={30}>
              <Text style={{color: '#fff'}}>ViewMenu</Text>
            </ShadowContainer>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default SingleRestaurant;

const styles = StyleSheet.create({
  RestaurantContainer: {
    height: 180,
    backgroundColor: 'rgba(196,196,196,0.55)',
    paddingBottom: 10,
    marginBottom: 10,
    position: 'relative',
    borderRadius: 10,
    overflow: 'hidden',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: 'rgba(0,0,0,01)',
  },
  info: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    backgroundColor: '#ccc',
    margin: 10,
    width: 200,
    height: 90,
    padding: 5,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    zIndex: 10,
  },
  profilePic: {
    width: 70,
    height: 70,
    backgroundColor: '#7889C6',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 1,
  },
  data: {
    flex: 1,
    paddingHorizontal: 8,
  },
  title: {
    fontSize: 12,
    fontWeight: 'bold',
    paddingVertical: 3,
  },
  distance: {
    fontSize: 10,
    fontWeight: '300',
  },

  BannerContainer: {
    width: '100%',
    height: '70%',
    backgroundColor: 'transparent',
    position: 'relative',
    margin: 0,
    padding: 0,
  },
  options: {
    marginHorizontal: 5,
  },
  options1st: {
    flexDirection: 'row-reverse',
    marginHorizontal: 3,
  },
});
