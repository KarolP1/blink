import {ScrollView, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import ImageBg from '../../../components/background/ImageBackground';
import {default as StaticSubscriptions} from '../../../static/subscription.json';
import Singlesub from './singlesub';
import {useNavigation} from '@react-navigation/native';
import {AuthScreenProp} from '..';

export interface APInterface {}
export interface Subscription {
  id: number;
  name: string;
  pricing: string;
  icon: string;
  options: string[];
}

const SubscriptionLVL = () => {
  const [selected, setSelected] = useState<null | {id: number; name: string}>(
    null,
  );
  useEffect(() => {}, [selected]);

  const navigation = useNavigation<AuthScreenProp>();
  return (
    <ImageBg>
      <ScrollView
        horizontal={true}
        decelerationRate={0}
        snapToInterval={210} //your element width
        snapToAlignment={'center'}
        style={styles.scrollcontainer}>
        {StaticSubscriptions.map((sub: Subscription) => (
          <Singlesub
            {...sub}
            selected={selected}
            key={sub.id}
            setSelected={() => setSelected({id: sub.id, name: sub.name})}
          />
        ))}
      </ScrollView>
      {selected !== null && (
        <TouchableOpacity
          style={styles.registerButton}
          onPress={() =>
            navigation.navigate('Register', {
              name: selected.name,
              id: selected.id,
            })
          }>
          <Text style={{color: '#fff'}}>Sign up there</Text>
        </TouchableOpacity>
      )}
    </ImageBg>
  );
};
const styles = StyleSheet.create({
  scrollcontainer: {
    flexDirection: 'row',
  },
  registerButton: {
    alignItems: 'center',
    paddingVertical: 10,
    backgroundColor: '#EA3651',
    marginHorizontal: 50,
    borderRadius: 5,
    shadowOffset: {width: 10, height: 8},
    elevation: 10,
  },
});

export default SubscriptionLVL;
