import React from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';
import { WelcomeText } from '../components';
import * as RNElements from '@rneui/base';

class HomeScreen extends React.Component {
   render() {
      return (
         <View style={styles.container}>
            <WelcomeText text="Calculateur d'IMC" />
            <Image
               style={styles.homeImg}
               source={require("../assets/imc-calulator-home-logo.png")}
            />

            <RNElements.Button
               title="Calculer mon IMC"
               titleStyle={{ 
                  color: 'white', 
                  marginHorizontal: 20, 
                  fontWeight: "bold", 
                  letterSpacing: 1.5,
                  fontSize:24,
               }}
               buttonStyle={{
                  backgroundColor: 'black',
                  borderWidth: 2,
                  paddingTop:16,
                  paddingBottom:16,
                  borderColor: 'white',
                  borderRadius: 8,
               }}
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
      justifyContent: "space-between",
      paddingBottom:64,
   },
   homeImg: {
      width: 170,
      height: 72,
      borderRadius: 4,
      margin: 96,
   },
})

export default HomeScreen;