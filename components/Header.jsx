import { useContext} from 'react' 
import { StyleSheet, Text, View } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {AuthContext} from '../contexts/Auth'

export default function Header(props) {

    const {login} = useContext(AuthContext)
    const {funcao} = useContext(AuthContext)
    const navigation = useNavigation()

    function goToHome() {
        console.log("entrou")
        navigation.navigate('comarcaList')
    }

    return (
        <>
            <View style={style.container}>
                <SimpleLineIcons name='home' size={20} color='white' onPress={() => goToHome()}>

                </SimpleLineIcons>
                <Text style={style.headerText}>{props.title}</Text><Text style={style.headerLogin}>{login[0].toUpperCase()+ login.substring(1)}{funcao}</Text>
                
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
    },
    headerLogin: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white',
        paddingLeft: 80
    }

})
