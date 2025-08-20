// src/components/VerticalProductCard.tsx

import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Product } from '../types/Product';

type Props = {
  product: Product;
};

const VerticalProductCard = ({ product }: Props) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: product.image }} style={styles.image} />
      <Text style={styles.title}>{product.title}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Text style={styles.category}>{product.category}</Text>
    </View>
  );
};

export default VerticalProductCard;

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginBottom: 16,
    padding: 12,
    borderRadius: 8,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  image: {
    width: '100%',
    height: 120,
    borderRadius: 8,
  },
  title: {
    marginTop: 8,
    fontWeight: 'bold',
  },
  price: {
    marginTop: 4,
    color: '#888',
  },
  category: {
    marginTop: 2,
    fontStyle: 'italic',
    fontSize: 12,
  },
});
