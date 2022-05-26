import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const LikeShere = ({
  isLiked,
  setIsLiked,
}: {
  isLiked: boolean;
  setIsLiked: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <View style={styles.bg}>
      <TouchableOpacity onPress={() => setIsLiked(!isLiked)}>
        {isLiked ? (
          <Image
            style={{width: 30, height: 30}}
            source={require('../../../../../../../assets/utilityIcons/Order/restaurant/like-false.png')}
          />
        ) : (
          <Image
            style={{width: 30, height: 30}}
            source={require('../../../../../../../assets/utilityIcons/Order/restaurant/like-true.png')}
          />
        )}
      </TouchableOpacity>

      <TouchableOpacity>
        <Image
          style={{width: 30, height: 30}}
          source={require('../../../../../../../assets/utilityIcons/Order/restaurant/shere.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default LikeShere;

const styles = StyleSheet.create({
  bg: {
    padding: 5,
    flexDirection: 'row',
  },
});
