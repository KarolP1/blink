import React from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Subscription} from '.';

const Singlesub = (
  props: Subscription & {
    setSelected: () => void;
    selected: null | {id: number; name: string};
  },
) => {
  const isSelected = props.selected?.id === props.id ? true : false;

  return (
    <View
      style={[
        styles.container,
        isSelected && {backgroundColor: 'rgba(0,0,0,.25)'},
      ]}>
      <Image
        style={{width: 100, height: 100}}
        source={{
          uri: props.icon,
        }}
      />
      <Text style={styles.title}>{props.name}</Text>
      <View style={styles.pricing}>
        <Text>Pricing:</Text>
        <Text style={styles.price}>{props.pricing}</Text>
      </View>

      <ScrollView style={styles.options}>
        {props.options.map(element => (
          <Text key={`${element + props.id}`}>
            <Text style={styles.price}>+</Text> {element}
          </Text>
        ))}
      </ScrollView>
      {!isSelected && (
        <TouchableOpacity
          style={styles.selectButton}
          onPress={props.setSelected}>
          <Text style={{color: '#fff'}}>select</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Singlesub;

const styles = StyleSheet.create({
  container: {
    width: 200,
    padding: 20,
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,.15)',
    margin: 10,
    borderRadius: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    paddingVertical: 10,
  },
  price: {
    color: '#EA3651',
    textAlign: 'center',
  },
  pricing: {
    paddingVertical: 10,
    alignItems: 'center',
  },
  options: {
    height: 100,
    backgroundColor: '',
  },
  selectButton: {
    borderRadius: 5,
    paddingVertical: 10,

    paddingHorizontal: 25,
    margin: 10,
    backgroundColor: '#EA3651',
  },
});
