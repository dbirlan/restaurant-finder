import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

const ResultsDetail = ({ result }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{ uri: result.image_url }} />
      <Text style={styles.name}>{result.name}</Text>
      <Text>
        {result.rating} étoiles, {result.review_count} avis
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: 15,
  },
  image: {
    height: 120,
    width: 250,
    borderRadius: 5,
    marginBottom: 5,
  },
  name: {
    fontWeight: 'bold',
  },
});

export default ResultsDetail;
