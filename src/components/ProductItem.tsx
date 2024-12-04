import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React, {PropsWithChildren} from 'react';

type ProductProps = PropsWithChildren<{product: Product}>;

const ProductItem = ({product}: ProductProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{uri: product.imageUrl}} />
      <View style={styles.details}>
        <Text style={styles.productName} numberOfLines={1}>{product.name}</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.offerPercentage}>
            {product.offerPercentage}% off
          </Text>
          <Text style={styles.originalPrice}>₹ {product.originalPrice}</Text>
          <Text style={styles.discountPrice}>₹ {product.discountPrice}</Text>
        </View>
        <View style={styles.rowContainer}>
          <Text style={styles.ratingText}>{product.rating} ★</Text>
          <Text style={styles.ratingCountText}>
            {product.ratingCount} ratings
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ProductItem;

const styles = StyleSheet.create({
  container: {
    margin: 8,
    flexDirection: 'row',
  },
  image: {
    height: 150,
    width: 90,
    resizeMode: 'contain',
    marginRight: 12,
  },
  details: {
    justifyContent: 'space-evenly',
  },
  rowContainer: {
    flexDirection: 'row',
  },
  productName: {
    fontSize: 16,
    fontWeight: 500,
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
    marginTop: 5,
    fontSize: 13,
    color: '#708090',
  },
  priceContainer: {
    borderRadius: 10,
    marginBottom: 10,
    flexDirection: 'row',
    backgroundColor: '#FFFACD',
    paddingStart: 10,
    paddingVertical: 5,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  offerPercentage: {
    fontSize: 14,
    fontWeight: 600,
    color: '#00A550',
  },
  originalPrice: {
    fontSize: 14,
    color: 'rgba(0, 0, 0, 0.5)',
    textDecorationLine: 'line-through',
    marginHorizontal: 10,
  },
  discountPrice: {
    fontSize: 14,
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
