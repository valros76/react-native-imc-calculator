import React from 'react';
import { StyleSheet, View, Text} from 'react-native';
import * as RNElements from '@rneui/base';

class AboutScreen extends React.Component {
   render() {
      return (
         <View style={styles.container}>
            <RNElements.Avatar
               size="xlarge"
               rounded
               source={require("../assets/animated_cat.gif")}
            />
            <Text>
               Screen : AboutScreen.
            </Text>
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

export default AboutScreen;