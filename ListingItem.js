import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ListingItem = ({ item }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.name}>{item.name}</Text>
      <Text style={styles.city}>📍 {item.city}</Text>
      <Text>💰 Estimated Cost: ${item.estimated_cost}</Text>
      <Text>⭐ {item.user_rating.average_rating} ({item.user_rating.votes} votes)</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginVertical: 8,
    padding: 15,
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  city: {
    color: '#888',
    marginBottom: 5,
  },
});

export default ListingItem;
