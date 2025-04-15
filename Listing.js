import React from 'react';
import { FlatList, View, StyleSheet } from 'react-native';
import ListingItem from './ListingItem';

const Listing = ({ data }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        renderItem={({ item }) => <ListingItem item={item} />}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
  },
});

export default Listing;
