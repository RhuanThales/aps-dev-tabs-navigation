import React from 'react';
import { NavigationContainer} from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import Icon  from 'react-native-vector-icons/Ionicons';
import Home from './src/pages/Home';
import AboutUs from './src/pages/AboutUs';
import Contact from './src/pages/Contact';
import Suport from './src/pages/Suport';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const icons = {
  Home: {
    name: 'ios-home'
  },
  AboutUs: {
    name: 'ios-people'
  },
  Contact: {
    name: 'ios-call'
  },
  Suport: {
    name: 'ios-chatbubles'
  }

}

function Tabs() {
  return (
      <Tab.Navigator
        screenOptions={ ({route}) => ({
          tabBarIcon: ({color, size}) => {
            const { name } = icons[route.name];
            return <Icon name={name} color={color} size={size} />
          }
        }) }
        tabBarOptions={{
          style: {
            backgroundColor: '#000'
          },
          activeTintColor: '#FFF',
          inactiveTintColor: '#8046E0'
        }}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="About Us" component={AboutUs}/>
        <Tab.Screen name="Contact" component={Contact}/>
        <Tab.Screen name="Suport" component={Suport}/>
      </Tab.Navigator>
  );
}

export default function App() {
  return(
 <NavigationContainer>
   <Stack.Navigator>
      <Stack.Screen name="Home" component={Tabs} options={{ headerShown: false }}/>
      <Stack.Screen name="Contact" component={Contact}/>
   </Stack.Navigator>
 </NavigationContainer>
 )
}
