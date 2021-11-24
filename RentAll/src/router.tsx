import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Feather } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

import Home from './pages/Home/Home';
import Detail from './pages/Detail/Detail';
import Detail2 from './pages/Detail/Detail2';
import Detail3 from './pages/Detail/Detail3';
import Map from './pages/Map/Map';
import Map2 from './pages/Map/Map2';
import Map3 from './pages/Map/Map3';

const Stack = createStackNavigator();

function Routes(){
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen
                 name="home" 
                 component={Home} 
                 options={{
                    title: 'RENT ALL',
                    headerTitleStyle:{
                        fontFamily: 'Montserrat_700Bold'
                    },
                 headerRight: () => (
                     <TouchableOpacity style={{marginRight: 15}}>
                       <Feather
                        name="shopping-bag"
                        size={24}
                        color="#000"
                       />
                     </TouchableOpacity>
                 )
                 }}
                 />

                <Stack.Screen
                 name="map" 
                 component={Map} 
                 options={{
                    title: 'LOCALIZAÇÃO',
                    headerTitleStyle:{
                        fontFamily: 'Montserrat_700Bold'
                    },
                 headerRight: () => (
                     <TouchableOpacity style={{marginRight: 15}}>
                       <Feather
                        name="shopping-bag"
                        size={24}
                        color="#000"
                       />
                     </TouchableOpacity>
                 )
                 }}
                 />

                <Stack.Screen
                 name="map2" 
                 component={Map2} 
                 options={{
                    title: 'LOCALIZAÇÃO',
                    headerTitleStyle:{
                        fontFamily: 'Montserrat_700Bold'
                    },
                 headerRight: () => (
                     <TouchableOpacity style={{marginRight: 15}}>
                       <Feather
                        name="shopping-bag"
                        size={24}
                        color="#000"
                       />
                     </TouchableOpacity>
                 )
                 }}
                 />

                <Stack.Screen
                 name="map3" 
                 component={Map3} 
                 options={{
                    title: 'LOCALIZAÇÃO',
                    headerTitleStyle:{
                        fontFamily: 'Montserrat_700Bold'
                    },
                 headerRight: () => (
                     <TouchableOpacity style={{marginRight: 15}}>
                       <Feather
                        name="shopping-bag"
                        size={24}
                        color="#000"
                       />
                     </TouchableOpacity>
                 )
                 }}
                 />

                <Stack.Screen 
                name="detail" 
                component={Detail}
                options={{
                    title: 'DETALHES',
                    headerTitleStyle:{
                        fontFamily: 'Montserrat_700Bold'
                    },
                 headerRight: () => (
                     <TouchableOpacity style={{marginRight: 15}}>
                       <Feather
                        name="shopping-bag"
                        size={24}
                        color="#000"
                       />
                     </TouchableOpacity>
                 )
                 }}
                />

                <Stack.Screen 
                name="detail2" 
                component={Detail2}
                options={{
                    title: 'DETALHES',
                    headerTitleStyle:{
                        fontFamily: 'Montserrat_700Bold'
                    },
                 headerRight: () => (
                     <TouchableOpacity style={{marginRight: 15}}>
                       <Feather
                        name="shopping-bag"
                        size={24}
                        color="#000"
                       />
                     </TouchableOpacity>
                 )
                 }}
                />

                <Stack.Screen 
                name="detail3" 
                component={Detail3}
                options={{
                    title: 'DETALHES',
                    headerTitleStyle:{
                        fontFamily: 'Montserrat_700Bold'
                    },
                 headerRight: () => (
                     <TouchableOpacity style={{marginRight: 15}}>
                       <Feather
                        name="shopping-bag"
                        size={24}
                        color="#000"
                       />
                     </TouchableOpacity>
                 )
                 }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;