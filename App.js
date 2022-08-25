import React from 'react';
import {StyleSheet, View} from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';

const App = () => {
  return (
    <>
      <View style={styles.container}>
        <CategoriesScreen />
      </View>
    </>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#24180f'},
});
