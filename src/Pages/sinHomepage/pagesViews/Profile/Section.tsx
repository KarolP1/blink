import {
  Alert,
  Button,
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {ReactNode, useState} from 'react';
import {TextInput} from 'react-native-paper';
import {ShadowFlex} from 'react-native-neomorph-shadows';
import {useAppDispatch, useAppSelector} from '../../../../redux/hooks';
import {addUserAllergies} from '../../../../redux/User/thunks';

const SectionContainerNoEditing = (props: {
  title: string;
  children?: ReactNode;
  balance?: number;
}) => {
  return (
    <View style={{margin: 10}}>
      <View style={styles.sectionHeader}>
        <Text style={styles.headerText}>{props.title}</Text>
        <Text style={styles.headerText}>${props.balance}</Text>
      </View>
      <>{props.children}</>
    </View>
  );
};

const SectionContainerEdit = (props: {
  title: string;
  children?: ReactNode;
  editAction: () => void;
  isEditModeEnabled: boolean;
  ifFormHasChanges: boolean;
}) => {
  return (
    <View style={{margin: 10}}>
      <View
        style={[
          styles.sectionHeader,
          {backgroundColor: props.isEditModeEnabled ? '#EA3651' : '#464646'},
        ]}>
        <Text style={styles.headerText}>{props.title}</Text>
        <TouchableOpacity
          onPress={() => {
            if (props.ifFormHasChanges)
              Alert.alert(
                'notification',
                'form has unsafed changes. Submit to save them.',
              );
            else props.editAction();
          }}
          style={{
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            aspectRatio: 1,
          }}>
          {!props.isEditModeEnabled ? (
            <Image
              style={{height: 30, aspectRatio: 1}}
              source={require(`../../../../assets/utilityIcons/edit.png`)}
            />
          ) : (
            <Image
              style={{height: 30, aspectRatio: 1}}
              source={require(`../../../../assets/utilityIcons/close.png`)}
            />
          )}
        </TouchableOpacity>
      </View>

      <>{props.children}</>
    </View>
  );
};

const SectionContainerAdd = (props: {
  title: string;
  children?: ReactNode;
  editAction: () => void;
  isEditModeEnabled: boolean;
}) => {
  const [elementToAdd, setElementToAdd] = useState<string>('');
  const uid = useAppSelector(state => state.user.uid);

  const dispatch = useAppDispatch();
  const addAllergy = () => {
    if (elementToAdd !== '') {
      dispatch(addUserAllergies({uid: uid, allergy_name: elementToAdd}));
      setElementToAdd('');
    }
  };
  return (
    <View style={{margin: 10}}>
      <View
        style={[
          styles.sectionHeader,
          {backgroundColor: props.isEditModeEnabled ? '#EA3651' : '#464646'},
        ]}>
        <Text style={styles.headerText}>{props.title}</Text>
        <TouchableOpacity
          onPress={() => {
            props.editAction();
          }}
          style={{
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            aspectRatio: 1,
          }}>
          {!props.isEditModeEnabled ? (
            <Image
              style={{height: 20, aspectRatio: 1}}
              source={require(`../../../../assets/utilityIcons/add.png`)}
            />
          ) : (
            <Image
              style={{height: 20, aspectRatio: 1}}
              source={require(`../../../../assets/utilityIcons/close.png`)}
            />
          )}
        </TouchableOpacity>
      </View>
      {props.isEditModeEnabled && (
        <View style={{alignItems: 'flex-end'}}>
          <ShadowFlex
            inner
            style={{
              shadowOffset: {width: 0, height: 0},
              shadowOpacity: 0.5,
              shadowColor: 'black',
              shadowRadius: 3,
              borderRadius: 3,
              height: 40,
              paddingVertical: 3,
              paddingHorizontal: 6,
              marginVertical: 5,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <TextInput
              style={{
                height: 40,
                width: '100%',
                backgroundColor: 'transparent',
              }}
              value={elementToAdd}
              onChangeText={text => setElementToAdd(text)}
              placeholder="Add Allergy"
            />
          </ShadowFlex>
          <TouchableOpacity
            onPress={() => addAllergy()}
            style={{
              backgroundColor: '#EA3651',
              width: 80,
              height: 40,
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 5,
              margin: 5,
              right: 0,
            }}>
            <Text style={{color: '#fff'}}>ADD</Text>
          </TouchableOpacity>
        </View>
      )}
      <>{props.children}</>
    </View>
  );
};

const SectionContainerPhoto = (props: {
  title: string;
  children?: ReactNode;
  plusAction: () => void;
}) => {
  return (
    <View style={{margin: 10}}>
      <View style={styles.sectionHeader}>
        <Text style={styles.headerText}>{props.title}</Text>
        <TouchableOpacity
          onPress={() => {
            props.plusAction();
          }}
          style={{
            height: '100%',
            alignItems: 'center',
            justifyContent: 'center',
            aspectRatio: 1,
          }}>
          <Image
            style={{height: 20, aspectRatio: 1}}
            source={require(`../../../../assets/utilityIcons/add.png`)}
          />
        </TouchableOpacity>
      </View>
      <>{props.children}</>
    </View>
  );
};

const SectionContainer = {
  Edit: SectionContainerEdit,
  Clasic: SectionContainerNoEditing,
  Add: SectionContainerAdd,
  Photo: SectionContainerPhoto,
};
export default SectionContainer;

const styles = StyleSheet.create({
  sectionHeader: {
    backgroundColor: '#464646',
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    flexDirection: 'row',
  },
  headerText: {
    color: '#fff',
  },
});
