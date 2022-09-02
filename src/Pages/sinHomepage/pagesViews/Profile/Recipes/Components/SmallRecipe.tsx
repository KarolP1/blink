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
  editable: boolean;
}) => {
  const handleEdit = () => {
    //TODO addReduxEdit
  };

  const handleDelete = () => {
    //TODO addReduxDelete
  };
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
      {props.editable && (
        <View
          style={{
            position: 'absolute',
            top: 10,
            right: 10,
            padding: 10,
            marginVertical: 5,
          }}>
          <TouchableOpacity
            onPress={() => {
              handleEdit;
            }}>
            <Image
              style={styles.smallIconOptions}
              source={require('../../../../../../assets/utilityIcons/editC.png')}
            />
          </TouchableOpacity>
          <TouchableOpacity onPress={handleDelete}>
            <Image
              style={styles.smallIconOptions}
              source={require('../../../../../../assets/utilityIcons/deleteC.png')}
            />
          </TouchableOpacity>
        </View>
      )}
      <TouchableOpacity
        style={{
          width: '40%',
          padding: 10,
          paddingHorizontal: 20,
          backgroundColor: 'red',
          margin: 5,
          borderRadius: 5,
        }}>
        <Text style={{textAlign: 'center', color: '#fff'}}>Details</Text>
      </TouchableOpacity>
    </ShadowFlex>
  );
};

export default SmallRecipe;

const styles = StyleSheet.create({
  container: {
    shadowOffset: {width: 2, height: 2},
    shadowOpacity: 1,
    shadowColor: 'rgba(77,77,77,.25)',
    shadowRadius: 5,
    borderRadius: 10,
    backgroundColor: 'rgba(171,160,145,.85)',
    width: 230,
    margin: 5,
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginHorizontal: 5,
    overflow: 'hidden',
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
  smallIconOptions: {
    width: 30,
    height: 30,
    marginBottom: 10,
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
