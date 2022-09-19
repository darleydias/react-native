import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import OperacoesServices from "../services/OperacoesServices";
import Header from "./Header";
import {Feather as Icon} from "@expo/vector-icons"

function OperacaoList() {

    const [load,setLoad]= useState("")
    const [operacoes,setOperacoes] = useState([])
    const navigation =useNavigation();


    useEffect(()=>{
        OperacoesServices.getOperacoes().then(res=>{
            setOperacoes(res.data)
            setLoad(false)
        })
    },[load])

    function handlerEditPress(codigo,nome){
        let title = "Editando operação"
        let action = false
        navigation.navigate("operacoesEdit",{title,codigo,nome,action})
    }
    function goToAdd() {
        let action = true
        let title="Adicionando operação"
        navigation.navigate('operacoesEdit', {title,action})
    }

    return (
        <>
        <Header title="Lista de operações"/>
        
        <ScrollView style={styles.scrollContainer}>
            {
                operacoes.map((operacao,index)=>{
                    return(
                        <View key={index} style={styles.container}>
                            <Text key={index} style={styles.textItem}>{operacao.nome}</Text>

                            <View style={styles.action}>
                                <TouchableOpacity style={styles.editButton} onPress={() => handlerEditPress(operacao.nome,operacao.codigo)} >
                                    <Icon name="edit" size={20} color='blue'></Icon>
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
}const styles = StyleSheet.create({

    scrollContainer: {
        flex: 1,
        width: '98%',
    },
    container: {
        backgroundColor: '#fff',
        marginTop: 3,
        width: '100%',

    },
    textItem: {
        fontSize: 20,
        margin:6
    },
    editButton: {
        marginLeft: 10,
        height: 40,
        borderRadius: 10,
        padding: 10,
        fontSize: 12,
        elevation: 10,
        shadowOpacity: 10,
        shadowColor: '#ccc',
        alignItems: 'center'
    },
    button: {
        marginTop: 10,
        height: 40,
        backgroundColor: 'navy',
        borderRadius: 10,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    action: {
        flexDirection: "row-reverse"
    }
})
export default OperacaoList