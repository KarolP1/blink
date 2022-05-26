import {Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {Shadow} from 'react-native-neomorph-shadows';

const ItemMenu = (props: {
  name: string;
  icon: any;
  selected: 0 | 1 | 2 | 3 | 4;
  id: 0 | 1 | 2 | 3 | 4;
  setSelected: React.Dispatch<React.SetStateAction<0 | 1 | 2 | 3 | 4>>;
}) => {
  return props.selected === props.id ? (
    <Shadow
      inner // <- enable inner shadow
      useArt // <- set this prop to use non-native shadow on ios
      style={{
        shadowOffset: {width: 5, height: 5},
        shadowOpacity: 1,
        shadowColor: 'rgba(77,77,77,.7)',
        shadowRadius: 5,
        borderRadius: 5,
        backgroundColor: 'rgba(77,77,77,.05)',
        width: 70,
        height: 70,
        margin: 2,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        style={{width: 40, height: 40}}
        source={{
          uri: props.icon,
        }}
      />
      <Text style={styles.textIcon}>{props.name}</Text>
    </Shadow>
  ) : (
    <TouchableOpacity
      onPress={() => props.setSelected(props.id)}
      style={{flex: 1}}>
      <Shadow
        // <- enable inner shadow
        useArt // <- set this prop to use non-native shadow on ios
        style={{
          shadowOffset: {width: 5, height: 5},
          shadowOpacity: 1,
          shadowColor: 'rgba(77,77,77,.7)',
          shadowRadius: 5,
          borderRadius: 5,
          backgroundColor: 'rgba(171,160,145,0.7)',
          width: 60,
          height: 60,
          margin: 2,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{width: 40, height: 40}}
          source={{
            uri: props.icon,
          }}
        />
        {/* <Text style={styles.textIcon}>{props.name}</Text> */}
      </Shadow>
    </TouchableOpacity>
  );
};

export default ItemMenu;

const styles = StyleSheet.create({
  textIcon: {
    textAlign: 'center',
    width: '100%',
    justifyContent: 'space-between',
  },
});
