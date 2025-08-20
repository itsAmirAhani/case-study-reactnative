// src/components/HorizontalProductCard.tsx

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Product } from '../types/Product';

type Props = {
  product: Product;
};

const HorizontalProductCard = ({ product }: Props) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <View style={styles.info}>
        <Text numberOfLines={1} style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>${product.price}</Text>
        <Text style={styles.rating}>⭐ {product.rating.rate} ({product.rating.count})</Text>
      </View>
    </View>
  );
};

export default HorizontalProductCard;

const styles = StyleSheet.create({
  card: {
    width: 220,
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    marginRight: 12,
    padding: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
    borderRadius: 6,
  },
  info: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 13,
    marginBottom: 4,
  },
  price: {
    color: '#555',
    fontSize: 12,
  },
  rating: {
    color: '#999',
    fontSize: 11,
  },
});
