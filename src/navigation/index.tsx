import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppTab from './Tabs';
import { AllMovies, MovieDetails, Search } from '../screens';




const Stack = createNativeStackNavigator();


const AppNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator screenOptions={{ headerShown: false }} >
                <Stack.Screen component={AppTab} name='AppTab' />
                <Stack.Screen component={AllMovies} name='AllMovies' />
                <Stack.Screen component={Search} name='Search' />
                <Stack.Group screenOptions={{ presentation: 'modal' }} >
                    <Stack.Screen component={MovieDetails} name='MovieDetails' />
                </Stack.Group>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigator;