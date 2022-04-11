import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tab1 from './app/components/Tab1';
import Tab2 from './app/components/Tab2';
import Tab3 from './app/components/Tab3';
import Home from './app/components/Home';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
function HomeScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();
function RootNavigator () {
  return (
    <Stack.Navigator >  
      <Stack.Screen
        name="Tab3"
        component={Tab3}
      />
      <Stack.Screen
        name="Home"
        component={Home}
      />
      
    </Stack.Navigator>
  )
}
const Tab = createBottomTabNavigator();
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen name="Tab1" component={Tab1} />
      <Tab.Screen name="Tab2" component={Tab2} />
      <Tab.Screen name="Tab3" component={RootNavigator} options={{
        header: () => null
      }}/>
      
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;