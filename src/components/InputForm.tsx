import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {default as StaticSubscriptions} from '../static/subscription.json';
import {formRegister} from '../redux/Auth/types';
import {Controller} from 'react-hook-form';

interface inputInterface {
  placeholder: string;
  name: string;
  handleChange: (name: string, value: string | number) => void;
  injectedValue?: {name: string};
  type?: 'dropdown' | 'default';
  secured?: boolean;
  setSelected?: (name: string, id: number) => void;
  style?: any;
  valueForm: string;
  control?: any;
}

const InputForm = (props: inputInterface) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [clicked, setClicked] = useState<boolean>(false);

  const setSelected = props.setSelected ? props.setSelected : () => {};

  return (
    <View style={styles.container}>
      {props.type === 'default' || props.type === undefined ? (
        <>
          <TextInput
            onChangeText={text => {
              setClicked(true);
              props.handleChange(props.name, text);
            }}
            value={props.valueForm}
            placeholderTextColor={'#DFDEDE'}
            style={[styles.Input, props.style]}
            placeholder={props.placeholder}
            secureTextEntry={
              props.secured === false || props.secured === undefined
                ? false
                : true
            }
          />
        </>
      ) : (
        <TouchableOpacity onPress={() => setIsOpen(!isOpen)}>
          <View style={styles.Input}>
            <Text>
              {props.injectedValue !== undefined
                ? ` ${props.injectedValue.name}`
                : ''}
            </Text>
          </View>
        </TouchableOpacity>
      )}
      {props.type === 'dropdown' && (
        <View style={isOpen ? {display: 'flex'} : {display: 'none'}}>
          <FlatList
            data={StaticSubscriptions}
            style={{
              position: 'absolute',
              zIndex: 100,
              backgroundColor: 'rgba(170,154,144,0.75)',
              borderRadius: 5,
              width: '100%',
              padding: 10,
            }}
            renderItem={({item, index}) => (
              <TouchableOpacity
                onPress={() => {
                  setSelected(item.name, item.id);
                  props.handleChange(props.name, item.name);
                  setIsOpen(false);
                }}>
                <Text key={index}>{item.name}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  Input: {
    borderRadius: 5,
    backgroundColor: 'rgba(141, 139, 133,.85)',
    marginVertical: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.41,
    shadowRadius: 9.11,

    elevation: 20,
  },
  container: {width: '100%'},
});
