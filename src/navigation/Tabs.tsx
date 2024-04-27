import * as React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Favorites, Home } from '../screens';
import colors from '../themes/colors';
import { vScale } from '../themes/scales';
import { AppText } from '../components/common';
import Icon from 'react-native-vector-icons/Ionicons'
const Tab = createBottomTabNavigator();



const tabs = [
    {
        id: 1,
        name: 'Home',
        label: "Home",
        icon: 'grid',
        component: Home
    },
    {
        id: 1,
        name: 'Favorites',
        label: "Favorites",
        icon: 'star',
        component: Favorites
    },
    {
        id: 1,
        name: 'Tickets',
        label: "ticket",
        icon: 'ticket',
        component: Favorites
    },

];

const AppTab = ({ }) => {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}>
            {tabs.map((item, index) => (
                <Tab.Screen
                    key={index}
                    name={item.name}
                    component={item.component}
                    options={{
                        tabBarStyle: styles.container,
                        tabBarLabel: ({ focused }) => (
                            <>
                                <AppText color={focused ? colors.selection : colors.unSelection} >
                                    {item.label}
                                </AppText>
                            </>
                        ),
                        tabBarIcon: ({ focused }) => (
                            <Icon
                                name={item.icon}
                                color={focused ? colors.selection : colors.unSelection}
                                size={20}
                            />
                        ),
                    }}
                />
            ))}
        </Tab.Navigator>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.background,
        borderTopWidth: 0,
        paddingTop: vScale(10),
        height: vScale(90),

    },

});
export default AppTab;
