import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Seperator = () => {
  return <View style={styles.seperator} />
};

export default Seperator;

const styles = StyleSheet.create({
  seperator: {
    height: 1,
    backgroundColor: '#E5E4E2'
  },
});
