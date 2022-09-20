import { StyleSheet, Text, View } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


export default function Header(props) {


    const navigation = useNavigation()

    function goToHome() {
        navigation.navigate('operacoesList')
    }

    return (
        <>
            <View style={style.container}>
                <SimpleLineIcons name='home' size={20} color='white' onPress={() => goToHome()}>

                </SimpleLineIcons>
                <Text style={style.headerText}>{props.title}</Text>
            </View>
        </>
    )

}


const style = StyleSheet.create({

    container: {
        padding: 10,
        paddingRight: 50,
        backgroundColor: '#33525c',
        alignItems: 'center',
        flexDirection: 'row'
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        paddingLeft: 20
    }

})
