import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
// import Home from "./components/Home";

import ComarcaList from "./components/ComarcaList";
import ComarcaEdit from "./components/ComarcaEdit";
import ComarcaAdd from "./components/ComarcaAdd";
import ComarcaDelete from "./components/ComarcaDelete";
import ComarcaShow from "./components/ComarcaShow";

import OperacaoList from "./components/OperacaoList";
import OperacaoEdit from "./components/OperacaoEdit";
import OperacaoAdd from "./components/OperacaoAdd"
import OperacaoDelete from "./components/OperacaoDelete";
import OperacaoShow from "./components/OperacaoShow";
// import Login from "./components/Login";


const AppStack = createStackNavigator();

const Routes = () => {

    return (
        <>
            <NavigationContainer>
                <AppStack.Navigator screenOptions={{ headerShown: false }}>
                    {/* <AppStack.Screen name="login" component={Login}></AppStack.Screen> */}
                    <AppStack.Screen name="comarcaList" component={ComarcaList}></AppStack.Screen>
                    <AppStack.Screen name="comarcaEdit" component={ComarcaEdit}></AppStack.Screen>
                    <AppStack.Screen name="comarcaAdd" component={ComarcaAdd}></AppStack.Screen>
                    <AppStack.Screen name="comarcaDelete" component={ComarcaDelete}></AppStack.Screen>
                    <AppStack.Screen name="comarcaShow" component={ComarcaShow}></AppStack.Screen>
                    {/* <AppStack.Screen name='home' component={Home} ></AppStack.Screen>
                    {/* <AppStack.Screen name="operacoesList" component={OperacaoList}></AppStack.Screen>\
                    <AppStack.Screen name="operacoesEdit" component={OperacaoEdit}></AppStack.Screen>\
                    <AppStack.Screen name="operacoesAdd" component={OperacaoAdd}></AppStack.Screen>
                    <AppStack.Screen name="operacoesDelete" component={OperacaoDelete}></AppStack.Screen>
                    <AppStack.Screen name="operacoesShow" component={OperacaoShow}></AppStack.Screen> */}
                    
                </AppStack.Navigator>
            </NavigationContainer>
        </>
    )
}

export default Routes;