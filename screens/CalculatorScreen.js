import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ImcCalculator } from '../components';

class CalculatorScreen extends React.Component {
   render() {
      return (
         <View style={styles.container}>
            <ImcCalculator/>
         </View>
      );
   }
}

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
   },
})

export default CalculatorScreen;