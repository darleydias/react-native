import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect } from "react";
import Home from "./components/Home";
import OperacaoList from "./components/OperacaoList";
import OperacaoEdit from "./components/OperacaoEdit";


const AppStack = createStackNavigator();

const Routes = () => {

    return (
        <>
            <NavigationContainer>
                <AppStack.Navigator screenOptions={{ headerShown: false }}>
                    
                    {/* <AppStack.Screen name="operacaoList" component={ProductList}></AppStack.Screen> */}
                    <AppStack.Screen name="operacoesList" component={OperacaoList}></AppStack.Screen>
                    <AppStack.Screen name='home' component={Home} ></AppStack.Screen>
                    <AppStack.Screen name="operacoesEdit" component={OperacaoEdit}></AppStack.Screen>
                </AppStack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default Routes;