import {FlatList, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
//components
import Seperator from '../components/Seperator';

//data
import {products} from '../data/constants';

//navigation related
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../App';
import ProductItem from '../components/ProductItem';

type HomeProps = NativeStackScreenProps<RootStackParamsList, 'HomeScreen'>;

const HomeScreen = ({navigation}: HomeProps) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={item => item.id}
        ItemSeparatorComponent={Seperator}
        renderItem={({item}) => (
          <Pressable
            onPress={() =>
              navigation.navigate('DetailsScreen', {
                product: item,
              })
            }>
            <ProductItem product={item} />
          </Pressable>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#ffffff',
  },
});

export default HomeScreen;
