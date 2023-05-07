import React from 'react';
import { StyleSheet, View, Text, Button } from 'react-native';

class TestScreen extends React.Component {
   render() {
      return (
         <View style={styles.container}>
            <Text>
               Screen : Test Screen.
            </Text>

            <Button
               title="HomeScreen"
               onPress={() => {
                  this.props.navigation.navigate("Home")
               }}
            />

            <Button
               title="CalculatorScreen"
               onPress={() => {
                  this.props.navigation.navigate("Calculator")
               }}
            />
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

export default TestScreen;