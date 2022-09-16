import { StyleSheet,Text, ToucheableOpacity,View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header  from "./Header";

export default function Home() {
    const navigation = useNavigation();
    function GoToProductList(){
        navigation.navigate("productList")
    }
    return (
        <>
        <Header title="Gestao de produtos"></Header>
        <View>

        </View>
        </>
    )
}

const style = StyleSheet.create({
    container: {
        alignItems:"center",
        justifyContent:"center"
    },
    button: {
        margin:10,
        height:60,
        backgroundColor:"navy",
        borderRadius:10,
        paddingHorizontal:24,
        fontSize:16,
        alignItems:"center",
        justifyContent:"center"

    },
    buttonText: {
        color:"#fff",
        fontWeight:"bold"
    },
})