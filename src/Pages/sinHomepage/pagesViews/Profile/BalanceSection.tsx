import {
  Button,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import SectionContainer from './Section';

const BalanceSection = ({balance}: {balance: number}) => {
  return (
    <SectionContainer.Clasic title={'Balance:'} balance={balance}>
      <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
        <TouchableOpacity style={styles.button}>
          <Text style={{textAlign: 'center', color: '#fff'}}>Deposit</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={{textAlign: 'center', color: '#fff'}}>Withdraw</Text>
        </TouchableOpacity>
      </View>
    </SectionContainer.Clasic>
  );
};

export default BalanceSection;

const styles = StyleSheet.create({
  button: {
    width: 150,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(171,160,155,1)',
    marginTop: 10,
    borderRadius: 5,
    shadowColor: 'black',
    elevation: 10,
  },
});
