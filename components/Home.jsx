import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import Header from './Header';
import Recon from './Recon'
import Operacao from './Operacao';
import Movimentacao from './Movimentacao';
import AuthProvider from '../contexts/Auth';


function Inicio() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Inicio</Text>
      </View>
    );
  }
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="x" onPress={() => props.navigation.closeDrawer()}/>
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <>
        <Header title="Inicio"/>
    <Drawer.Navigator useLegacyImplementation drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="inicio" component={Inicio} />
      <Drawer.Screen name="recon" component={Recon} />
      <Drawer.Screen name="operacao" component={Operacao} />
      <Drawer.Screen name="movimentacao" component={Movimentacao} />
    </Drawer.Navigator>
    </>
  );
}

export default function Home() {
  return (
        <>
             <MyDrawer />
        </>
  );
}