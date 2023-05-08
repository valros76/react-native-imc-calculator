import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { HomeScreen, CalculatorScreen, AboutScreen, NavigationTabs } from './screens';

const Stack = createStackNavigator();

//preBuild

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="light" translucent={false} />
      <Stack.Navigator>
        <Stack.Screen name="NavigationTabs" component={NavigationTabs} options={{ headerShown: false, }}/>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Calculator" component={CalculatorScreen}/>
        <Stack.Screen name="AboutScreen" component={AboutScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}