import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useEffect, useState} from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ComarcasServices from "../services/ComarcasServices";
import Header from "./Header";
import {Feather as Icon} from "@expo/vector-icons"
import ModalConfirm from "./ModalConfirm";


function Recon() {

    const navigation =useNavigation();
    const reload = useIsFocused()
    const [modalVisible,setModalVisible] = useState(false)
    const [codigo,setCodigo] = useState()

    useEffect(()=>{

    },[reload])


    return (
        <>
 <View style={styles.container}>
      <Text style={styles.textItem}>Recon</Text>
    </View>
        </>
    )
}const styles = StyleSheet.create({

    scrollContainer: {
        flex: 1,
        width: '98%',
        margin:2,
        marginBottom:0,
        padding:0
    },
    container: {
        backgroundColor: '#fff',
        marginTop: 4,
        width: '100%'
    },
    textItem: {
        fontSize: 13,
        margin:0,
        alignContent:"flex-start"
    },
    editButton: {
        marginLeft: 10,
        height: 30,
        borderRadius: 10,
        padding: 5,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems:"flex-end",
        flexDirection:"row",
    },
    button: {
        marginTop: 10,
        height: 40,
        backgroundColor: '#33525c',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold'
    },
    action: {
        flexDirection: "row",
        textAlign:"left",
        justifyContent:'space-between',
        marginTop:1
    }

})
export default Recon