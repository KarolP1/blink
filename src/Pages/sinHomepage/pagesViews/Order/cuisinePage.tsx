import {
  FlatList,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  useWindowDimensions,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {default as CuisinesList} from '../../../../static/cuisines.json';

const CuisinePage = ({
  cuisine,
  setCuisine,
  setIsCuisinesVisible,
}: {
  cuisine: string | null;
  setCuisine: React.Dispatch<React.SetStateAction<string | null>>;
  setIsCuisinesVisible: () => void;
}) => {
  const [array, setArray] = useState(CuisinesList);
  const dimentions = useWindowDimensions();

  useEffect(() => {
    setArray(
      CuisinesList.filter(element =>
        element.NameEnglish.includes(cuisine || element.NameEnglish),
      ),
    );
    console.log(array.length);
  }, [cuisine]);

  return (
    <FlatList
      data={array}
      renderItem={({item}) => <Text>{item.NameEnglish}</Text>}
      scrollEnabled={true}
      nestedScrollEnabled={true}
      style={{
        backgroundColor: 'grey',
        width: '100%',
        maxHeight: dimentions.height / 4,
        position: 'absolute',
        top: 50,
        zIndex: 10,
      }}
    />
  );
};

export default CuisinePage;

const styles = StyleSheet.create({});
