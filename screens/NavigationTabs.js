import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Foundation as FoundationIcons } from 'react-native-vector-icons';
import HomeScreen from './HomeScreen';
import CalculatorScreen from './CalculatorScreen';
import AboutScreen from './AboutScreen';

const Tab = createBottomTabNavigator();

const NavigationTabs = () => {
   return (
      <Tab.Navigator backBehavior='order'>
        <Tab.Screen name="Home" component={HomeScreen} options={{
          tabBarLabel: 'Accueil',
          tabBarActiveTintColor: '#333',
          tabBarIcon: ({ color, size }) => (
            <FoundationIcons name="home" color={color} size={size} />
          ),
          title: "Accueil",
        }}/>
        <Tab.Screen name="Calculator" component={CalculatorScreen} options={{
          tabBarLabel: 'Mon IMC',
          tabBarActiveTintColor: '#333',
          tabBarIcon: ({ color, size }) => (
            <FoundationIcons name="pencil" color={color} size={size} />
          ),
          title: "Calculer mon IMC",
        }} />
        <Tab.Screen name="AboutScreen" component={AboutScreen} options={{
          tabBarLabel: 'À propos',
          tabBarActiveTintColor: '#333',
          tabBarIcon: ({ color, size }) => (
            <FoundationIcons name="widget" color={color} size={size} />
          ),
          title: "À propos",
        }} />
      </Tab.Navigator>
    )
}

export default NavigationTabs;