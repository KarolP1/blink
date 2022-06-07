import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {ShadowFlex} from 'react-native-neomorph-shadows';

const SmallRecipe = (props: {
  title: string;
  likes: number;
  observators: number;
  shereCount: number;
  image: string;
  details?: any;
}) => {
  return (
    <ShadowFlex style={styles.container}>
      <Image
        style={{width: '100%', aspectRatio: 1.2, borderRadius: 15}}
        source={{uri: props.image}}
      />

      <Text style={styles.titleContainer}>{props.title}</Text>
      <View style={styles.absoluteContainer}>
        <View style={styles.absoluteRow}>
          <Image
            style={styles.smallIcon}
            source={require('../../../../../../assets/utilityIcons/heart.png')}
          />
          <Text style={{color: '#fff'}}>{props.likes}</Text>
        </View>
        <View style={styles.absoluteRow}>
          <Image
            style={styles.smallIcon}
            source={require('../../../../../../assets/utilityIcons/eye.png')}
          />
          <Text style={{color: '#fff'}}>{props.observators}</Text>
        </View>
        <View style={styles.absoluteRow}>
          <Image
            style={styles.smallIcon}
            source={require('../../../../../../assets/utilityIcons/shere.png')}
          />
          <Text style={{color: '#fff'}}>{props.shereCount}</Text>
        </View>
      </View>
      <TouchableOpacity
        style={{
          width: '40%',
          padding: 10,
          paddingHorizontal: 20,
          backgroundColor: 'red',
          margin: 5,
          borderRadius: 5,
        }}>
        <Text style={{textAlign: 'center'}}>Details</Text>
      </TouchableOpacity>
    </ShadowFlex>
  );
};

export default SmallRecipe;

const styles = StyleSheet.create({
  container: {
    width: '60%',
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: 'rgba(171,160,145,0.7)',
    position: 'relative',
    alignItems: 'flex-end',
  },
  absoluteContainer: {
    position: 'absolute',
    top: 30,
    left: 10,
  },
  absoluteRow: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 10,
    paddingVertical: 5,
    marginVertical: 5,
    borderRadius: 3,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  smallIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  titleContainer: {
    flex: 1,
    width: '100%',
    textAlign: 'center',
    color: '#fff',
    margin: 10,
    fontWeight: '700',
    fontSize: 18,
  },
});
