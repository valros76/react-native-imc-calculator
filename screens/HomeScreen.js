import React from 'react';
import { StyleSheet, View, Image, Button } from 'react-native';
import { WelcomeText } from '../components';

class HomeScreen extends React.Component {
   render() {
      return (
         <View style={styles.container}>
            <WelcomeText text="Calculateur d'IMC" />
            <Image
               style={styles.homeImg}
               source={{
                  uri: "https://images.unsplash.com/photo-1559724087-a45f6a7a35d7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80",
               }}
            />

            <Button
               title="Calculer mon IMC"
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
   },
   homeImg: {
      width: 256,
      height: 256,
      borderRadius: 64,
      margin: 64,
   },
})

export default HomeScreen;