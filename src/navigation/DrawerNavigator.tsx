import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import BottomTabs from './BottomTab';
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
    return (
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen name="Home" component={BottomTabs} />
        </Drawer.Navigator>
    );
};

export default DrawerNavigator;
