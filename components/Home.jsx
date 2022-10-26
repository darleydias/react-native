import * as React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from "@react-navigation/native";
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
import Configuracao from './Configuracao'
import Icon from "react-native-vector-icons/Ionicons";
import { FaUserSecret,FaHome,FaUsersCog,FaPeopleArrows,FaCog} from 'react-icons/fa';
import { Card} from 'react-native-elements'
import ReconShow from './ReconShow';

function Inicio(){

    const navigation =useNavigation();

    function goToRecon(){
        navigation.navigate("Recon")
    }
    function goToOperation(){
        navigation.navigate("Operacao")
    }
    function goToMove(){
        navigation.navigate("Movimentacao")
    }
    function goToConfig(){
        navigation.navigate("Configuracao")
    }
    
    return (
        <View style={{  flex: 1, alignItems: "flex-start", justifyContent: "center", flexDirection: "row",flexWrap:'wrap'}}>      
        <View style={{  flex: 1, alignItems: "flex-start", justifyContent: "center", flexDirection: "row",flexWrap:'wrap'}}>            
                            <Card title="Card Recon"> 
                                <TouchableOpacity style={styles.editButton} onPress={() => goToRecon()} >
                                     <FaUserSecret size={100} color='#33525c'/>
                                </TouchableOpacity >
                            <Text style={StyleSheet.textItem}>Recon</Text>
                            </Card>

                            <Card title="Card Operacoes"> 
                                <TouchableOpacity style={styles.editButton} onPress={() => goToMove()} >
                                     <FaPeopleArrows size={100} color='#33525c'/>
                                </TouchableOpacity >
                            <Text style={StyleSheet.textItem}>Movimentações</Text>
                            </Card>
                    
        </View>
        <View style={{  flex: 1, alignItems: "flex-start", justifyContent: "center", flexDirection: "row",flexWrap:'wrap'}}>            
                            <Card title="Card Recon"> 
                                <TouchableOpacity style={styles.editButton} onPress={() => goToOperation()} >
                                     <FaUsersCog size={100} color='#33525c'/>
                                </TouchableOpacity >
                            <Text style={StyleSheet.textItem}>Operações</Text>
                            </Card>

                            <Card title="Card Operacoes"> 
                                <TouchableOpacity style={styles.editButton} onPress={() => goToConfig()} >
                                     <FaCog size={100} color='#33525c'/>
                                </TouchableOpacity >
                            <Text style={StyleSheet.textItem}>Configurações</Text>
                            </Card>
                    
        </View>
      
      </View>

    );
  }
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem label="" onPress={() => props.navigation.closeDrawer()} icon={() => <Icon name="close" size={16} />} />
    </DrawerContentScrollView>
  );
}

const Drawer = createDrawerNavigator();

function MyDrawer({ navigation }) {
  return (
    <>
    <Header title="Inicio"/>
    
    <Drawer.Navigator useLegacyImplementation drawerContent={(props) => <CustomDrawerContent {...props} />}>
      <Drawer.Screen name="Início" component={Inicio} options={{drawerIcon:config=><FaHome size={23} color={'#666'} name={'FaHome'}></FaHome>}}/>
      <Drawer.Screen name="Recon" component={Recon} options={{drawerIcon:config=><FaUserSecret size={23} color={'#666'} name={'FaUserSecret'}></FaUserSecret>}} />
      <Drawer.Screen name="Operacao" component={Operacao} options={{drawerIcon:config=><FaUsersCog size={23} color={'#666'} name={'FaUsersCog'}></FaUsersCog>}}/>
      <Drawer.Screen name="Movimentacao" component={Movimentacao} options={{drawerIcon:config=><FaPeopleArrows size={23} color={'#666'} name={'FaPeopleArrows'}></FaPeopleArrows>}}/>
      <Drawer.Screen name="Configuracao" component={Configuracao} options={{drawerIcon:config=><FaCog size={23} color={'#666'} name={'FaPeopleArrows'}></FaCog>}}/>
      <Drawer.Screen name="Mostra Recon" component={ReconShow}/>
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
const styles = StyleSheet.create({

    container: {

    },
    textItem: {
        fontSize: 16,
        marginTop: 5,
    }
})