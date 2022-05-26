import {
  Alert,
  Image,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {ReactNode} from 'react';

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
              style={{height: '90%', aspectRatio: 1}}
              source={require(`../../../../assets/utilityIcons/edit.png`)}
            />
          ) : (
            <Image
              style={{height: '90%', aspectRatio: 1}}
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
              style={{height: '90%', aspectRatio: 1}}
              source={require(`../../../../assets/utilityIcons/add.png`)}
            />
          ) : (
            <Image
              style={{height: '90%', aspectRatio: 1}}
              source={require(`../../../../assets/utilityIcons/close.png`)}
            />
          )}
        </TouchableOpacity>
      </View>

      <>{props.children}</>
    </View>
  );
};

const SectionContainer: any = {};
SectionContainer.Clasic = SectionContainerNoEditing;
SectionContainer.Edit = SectionContainerEdit;
SectionContainer.Add = SectionContainerAdd;
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
