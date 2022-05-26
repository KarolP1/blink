import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import ItemMenu from './item';

const InsideMenu = ({
  selected,
  setSelected,
}: {
  selected: 0 | 1 | 2 | 3 | 4;
  setSelected: React.Dispatch<React.SetStateAction<0 | 1 | 2 | 3 | 4>>;
}) => {
  return (
    <View style={styles.menuContainer}>
      <ItemMenu
        id={0}
        name="Info"
        icon={'https://static.networkmanager.pl/images/profile/info.png'}
        selected={selected}
        setSelected={setSelected}
      />
      <ItemMenu
        id={1}
        name="Rec0ipes"
        icon={'https://static.networkmanager.pl/images/profile/Reipes.png'}
        selected={selected}
        setSelected={setSelected}
      />
      <ItemMenu
        id={2}
        name="Invoices"
        icon={'https://static.networkmanager.pl/images/profile/Invoice.png'}
        selected={selected}
        setSelected={setSelected}
      />
      <ItemMenu
        id={3}
        name="Work"
        icon={'https://static.networkmanager.pl/images/profile/Work.png'}
        selected={selected}
        setSelected={setSelected}
      />
      <ItemMenu
        id={4}
        name="Disputes"
        icon={'https://static.networkmanager.pl/images/profile/Disputes.png'}
        selected={selected}
        setSelected={setSelected}
      />
    </View>
  );
};

export default InsideMenu;

const styles = StyleSheet.create({
  menuContainer: {
    width: '100%',
    height: 80,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
