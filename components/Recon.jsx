import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useEffect, useState,useContext} from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ModalConfirm from "./ModalConfirm";
import { AuthContext } from '../contexts/Auth'



function Recon({route}) {

    const [recons,setRecons] = useState([])
    const navigation =useNavigation();
    const reload = useIsFocused()
    const [modalVisible,setModalVisible] = useState(false)
    const {fillTitulo} = useContext(AuthContext)
    const {titulo} = useContext(AuthContext)
 
    useEffect(()=>{
        let idUsuario = 1
        // ReconServices.getReconByIdUsuario(idUsuario)
        // // ReconServices.getRecon(idUsuario)
        // .then((response)=>{
        //     setRecons(response)
        // })
        var mockup = [
            {'id':4,'ponto_id':'01 - Casa do Alvo','dataPrev':'2022-10-18 13:20:52'},
            {'id':5,'ponto_id':'18 - Escritório','dataPrev':'2022-10-18 00:20:52'},
            {'id':6,'ponto_id':'3 - Oficina','dataPrev':'2022-10-18 17:34:00'}
        ]
        setRecons(mockup)
        fillTitulo('Lista de Recons') 
    },[reload])

    function handlerMostrarPress(id){
        // navigation.navigate("Mostra Recon",{id})
        navigation.navigate("Mostra Recon",{id})
    }

    return (
        <>
        <ScrollView style={styles.scrollContainer}>
            {
                recons.map((recon,index)=>{
                    return(
                            <View key={index} style={styles.container}>
                                <View  style={styles.action}>
                                        <TouchableOpacity style={styles.editButton} onPress={() => handlerMostrarPress(recon.id)} >
                                            <Text key={index} style={styles.textItem}>{ recon.ponto_id }{recon.dataPrev.toString()} </Text> 
                                            {/* {((recon.dataPrev.getDate())) + "/" + ((recon.dataPrev.getMonth())) + "/" + recon.dataPrev.getFullYear()}*/}
                                        </TouchableOpacity>
                                </View>
                            </View>
                    )
                })
            }
        </ScrollView>
        

        <TouchableOpacity style={styles.button} onPress={() => goToAdd()}>
                <Text style={styles.buttonText}>Novo</Text>
        </TouchableOpacity>

        </>
    )
}
const styles = StyleSheet.create({

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
        fontSize: 15,
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