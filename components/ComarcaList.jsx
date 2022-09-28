import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ComarcasServices from "../services/ComarcasServices";
import Header from "./Header";
import {Feather as Icon} from "@expo/vector-icons"
import ModalConfirm from "./ModalConfirm";

function ComarcaList() {

    const [comarcas,setComarcas] = useState([])
    const navigation =useNavigation();
    const reload = useIsFocused()
    const [confirma,setConfirma] = useState(false)
    const [modalVisible,setModalVisible] = useState(false)
    const [codigo,setCodigo] = useState("")
    useEffect(()=>{
        ComarcasServices.getComarcas().then(res=>{
            setComarcas(res.data)
        })
    },[reload])

    function deleteTest(cod){
        setCodigo(cod)
        setModalVisible(true)
    }

    function handlerEditPress(codigo){
        let title = "Editando comarca"
        navigation.navigate("comarcaEdit",{title,codigo})
    }
    function handlerDeletePress(codigo){
        setModalVisible(false)
        navigation.navigate("comarcaDelete",{codigo})   
    }
    function handlerMostrarPress(codigo){
        let title = "Exibindo comarca"
        navigation.navigate("comarcaShow",{title,codigo})
    }
    function goToAdd() {
        let action = true
        let title="Adicionando comarca"
        navigation.navigate('comarcaAdd', {title,action})
    }

    return (
        <>
        <Header title="Lista de comarcas"/>
        
        <ScrollView style={styles.scrollContainer}>
            {
                comarcas.map((comarca,index)=>{
                    return(
                            <View key={index} style={styles.container}>
                            <View  style={styles.action}>
                                    <TouchableOpacity style={styles.editButton} onPress={() => handlerMostrarPress(comarca.codigo)} >
                                        <Text key={index} style={styles.textItem}>{comarca.nome}</Text>
                                    </TouchableOpacity>
                                    <View style={styles.action}>
                                        <TouchableOpacity style={styles.editButton} onPress={() => handlerEditPress(comarca.codigo)} >
                                            <Icon name="edit" size={20} color='#33525c'></Icon>
                                        </TouchableOpacity >
                                        <TouchableOpacity style={styles.editButton} onPress={() => deleteTest(comarca.codigo)}>
                                            <Icon name="delete" size={20} color='#33525c'></Icon>
                                        </TouchableOpacity>    
                                    </View>
                                </View>
                            </View>
 
                    )
                })
            }
        </ScrollView>
        
        <ModalConfirm
            onClose={()=>{setModalVisible(false)}}
            modalVisible={modalVisible}
            handlerDeletePress = {()=>{handlerDeletePress(codigo)}}
            codigo={codigo}
        />

        <TouchableOpacity style={styles.button} onPress={() => goToAdd()}>
                <Text style={styles.buttonText}>Novo</Text>
        </TouchableOpacity>

        </>
    )
}const styles = StyleSheet.create({

    scrollContainer: {
        flex: 1,
        width: '98%',
        margin:2
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
        marginTop:1,
    }

})
export default ComarcaList