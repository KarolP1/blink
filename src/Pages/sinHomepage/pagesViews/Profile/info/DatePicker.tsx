import {StyleSheet, Text, View} from 'react-native';
import React, {SetStateAction, useState} from 'react';

import DatePicker from 'react-native-date-picker';

interface interfaceDatepicker {
  date: Date;
  setDate: React.Dispatch<React.SetStateAction<Date>>;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DatePickerComponent = ({
  date,
  open,
  setDate,
  setOpen,
}: interfaceDatepicker) => {
  return (
    <DatePicker
      modal
      open={open}
      date={date}
      onConfirm={date => {
        setOpen(false);
        setDate(date);
      }}
      onCancel={() => {
        setOpen(false);
      }}
    />
  );
};

export default DatePickerComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A8E9CA',
  },
  title: {
    textAlign: 'left',
    fontSize: 20,
    fontWeight: 'bold',
  },
  datePickerStyle: {},
  text: {
    textAlign: 'left',
    width: 230,
    fontSize: 16,
    color: '#000',
  },
});
