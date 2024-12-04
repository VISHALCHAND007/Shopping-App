import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  FlatList,
} from 'react-native';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamsList} from '../App';

const width = +Dimensions.get('window');

type ProductProps = NativeStackScreenProps<
  RootStackParamsList,
  'DetailsScreen'
>;

const DetailsScreen = ({route}: ProductProps) => {
  const {product} = route.params;
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: product.imageUrl}} />
      <View>
        <Text style={styles.productName}>{product.name}</Text>
        <View style={styles.rowContainer}>
          <Text style={styles.ratingText}>{product.rating} ★</Text>
          <Text style={styles.ratingCountText}>
            {product.ratingCount} ratings
          </Text>
        </View>
        <View style={styles.priceContainer}>
          <Text style={styles.offerPercentage}>
            {product.offerPercentage}% off
          </Text>
          <Text style={styles.originalPrice}>₹ {product.originalPrice}</Text>
          <Text style={styles.discountPrice}>₹ {product.discountPrice}</Text>
        </View>
        <FlatList
          horizontal={false}
          data={product.tags}
          keyExtractor={item => item.toString()}
          renderItem={({item}) => (
            <View style={styles.tagContainer}>
              <Text style={styles.tagText}>{item}</Text>
            </View>
          )}
        />
      </View>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    margin: 8,
    flexDirection: 'column',
  },
  image: {
    height: 450,
    width: width,
    resizeMode: 'contain',
    marginRight: 12,
  },
  rowContainer: {
    marginBottom: 10,
    flexDirection: 'row',
  },
  priceContainer: {
    height: 80,
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: '#D0F0C0',
    paddingStart: 15,
    paddingVertical: 15,
    alignItems: 'flex-end',
  },
  productName: {
    fontSize: 20,
    fontWeight: 500,
    marginVertical: 15,
  },
  ratingText: {
    color: '#ffffff',
    backgroundColor: '#228B22',
    paddingVertical: 2,
    paddingHorizontal: 10,
    borderRadius: 6,
    marginEnd: 5,
  },
  ratingCountText: {
    fontSize: 15,
    color: '#708090',
  },
  offerPercentage: {
    fontSize: 20,
    fontWeight: 600,
    color: '#00A550',
  },
  originalPrice: {
    fontSize: 22,
    color: 'rgba(0, 0, 0, 0.5)',
    textDecorationLine: 'line-through',
    marginHorizontal: 10,
  },
  discountPrice: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  tagContainer: {
    borderWidth: 0.5,
    margin: 4,
    borderRadius: 4,
    paddingVertical: 5,
    alignSelf: 'flex-start',
    paddingHorizontal: 10,
  },
  tagText: {
    fontSize: 14,
    fontWeight: 400,
  },
});
