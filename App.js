import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, StyleSheet } from 'react-native';
import Header from './Header';
import Listing from './Listing';

const App = () => {
  const [restaurantData, setRestaurantData] = useState([]);
  const [totalCount, setTotalCount] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchRestaurants = async () => {
    try {
      const response = await fetch('https://jsonmock.hackerrank.com/api/food_outlets?page=1');
      const json = await response.json();
      setRestaurantData(json.data);
      setTotalCount(json.total); // 👈 this is the total
    } catch (error) {
      console.error('Fetch error:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRestaurants();
  }, []);

  return (
    <View style={styles.container}>
      <Header count={totalCount} />
      {loading ? <ActivityIndicator size="large" color="#f4511e" /> : <Listing data={restaurantData} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
