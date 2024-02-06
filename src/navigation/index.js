import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import HomeScreen from '../screens/HomeScreen';
import DetailScreen from '../screens/DetailScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {HomeIcon as HomeOutline, HeartIcon as HeartOutline, TicketIcon as TicketOutline,UserIcon as UserOutline,BellIcon as BellOutline} from 'react-native-heroicons/outline';
import {HomeIcon as HomeSolid, HeartIcon as HeartSolid, TicketIcon as TicketSolid, UserIcon as UserSolid, BellIcon as BellSolid} from 'react-native-heroicons/solid';
import { View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
        <Stack.Screen name="Welcome" component={WelcomeScreen} />
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="Detail" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export function HomeTabs(){
  return (
    <Tab.Navigator screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarIcon: ({ focused }) => menuIcons(route, focused),
        tabBarStyle: {
          marginBottom:0,
          height: 75,
          alignItems: 'center',
          
         
          marginHorizontal: 0,
          backgroundColor: '#FF9900',

        },
        tabBarItemStyle: {
          marginTop: 30,
          
        }
      })}
      
      >
      <Tab.Screen 
      name="Home" 
      component={HomeScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <View className="justify-center items-center top-0">
            {focused? <HomeSolid size="30" color="black" /> : <HomeOutline size="30" strokeWidth={2} color="#a66215" />}
          </View>
        )
      }}
    />
     
     <Tab.Screen 
      name="order" 
      component={HomeScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <View className=''>
              
              <View className="justify-center items-center top-0">
              {focused? <BellSolid size="30" color="black" /> : <BellOutline size="30" strokeWidth={2} color="#a66215" />}
              </View>
              
          </View>
        )
      }}
    />
      <Tab.Screen 
      name="favourite" 
      component={HomeScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <View className="justify-center items-center top-0">
            {focused? <HeartSolid size="30" color="black" /> : <HeartOutline size="30" strokeWidth={2} color="#a66215" />}
          </View>
        )
      }}
    />
    <Tab.Screen 
      name="cart" 
      component={HomeScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <View className="justify-center items-center top-0">
            {focused? <TicketSolid size="30" color="black" /> : <TicketOutline size="30" strokeWidth={2} color="#a66215" />}
          </View>
        )
      }}
    />
    <Tab.Screen 
      name="profile" 
      component={HomeScreen}
      options={{
        tabBarIcon: ({focused}) => (
          <View className="justify-center items-center top-0">
            {focused? <UserSolid size="30" color="black" /> : <UserOutline size="30" strokeWidth={2} color="#a66215" />}
          </View>
        )
      }}
    />
      
    </Tab.Navigator>
  )
}
export default AppNavigation;