import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { useEffect } from "react";
import Home from "./components/Home";
import ProductList from "./components/OperacaoList";


const AppStack = createStackNavigator();

const Routes = () => {

    return (
        <>
            <NavigationContainer>
                <AppStack.Navigator screenOptions={{ headerShown: false }}>
                    {/* <AppStack.Screen name='home' component={Home} ></AppStack.Screen> */}
                    <AppStack.Screen name="operacaoList" component={ProductList}></AppStack.Screen>
                </AppStack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default Routes;