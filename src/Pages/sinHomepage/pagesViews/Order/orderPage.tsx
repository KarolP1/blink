import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import SignedInBG from '../../../../components/background/ImageBackgroundSIN';
import {MenuSelector4} from '../../../../components/Selector4X4';
import {TextInputCuisine} from '../../../../components/text/input';
import {SafeAreaView} from 'react-native-safe-area-context';

const OrderPage = () => {
  const [cuisine, setCuisine] = useState<string | null>(null);

  useEffect(() => {
    console.log(cuisine);
  }, [cuisine]);

  return (
    <SignedInBG cantGoBack={true}>
      <View style={{margin: 10}}>
        <Text style={styles.Header}>Choose Cuisine</Text>
        <TextInputCuisine cuisine={cuisine} setCuisine={setCuisine} />
        <Text style={styles.Header}>Choose Provider Type</Text>
        <MenuSelector4 />
      </View>
    </SignedInBG>
  );
};

export default OrderPage;

const styles = StyleSheet.create({
  Header: {
    fontSize: 26,
    paddingVertical: 16,
    color: '#fff',
  },
});
