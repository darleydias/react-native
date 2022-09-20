import { useIsFocused, useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import OperacoesServices from "../services/OperacoesServices";
import Header from "./Header";
import {Feather as Icon} from "@expo/vector-icons"

function OperacaoList() {

    const [load,setLoad]= useState("")
    const [operacoes,setOperacoes] = useState([])
    const navigation =useNavigation();
    const reload = useIsFocused()


    useEffect(()=>{
        OperacoesServices.getOperacoes().then(res=>{
            setOperacoes(res.data)
        })
    },[reload])

    function handlerEditPress(codigo){
        let title = "Editando operação"
        navigation.navigate("operacoesEdit",{title,codigo,title})
    }
    function handlerDeletePress(codigo){
        navigation.navigate("operacoesDelete",{codigo})
    }
    function goToAdd() {
        let action = true
        let title="Adicionando operação"
        navigation.navigate('operacoesAdd', {title,action})
    }

    return (
        <>
        <Header title="Lista de operações"/>
        
        <ScrollView style={styles.scrollContainer}>
            {
                operacoes.map((operacao,index)=>{
                    return(
                        <View key={index} style={styles.container}>
                            

                            <View  style={styles.action}>
                                <Text key={index} style={styles.textItem}>{operacao.nome}</Text>
                                <View style={styles.action}>
                                    <TouchableOpacity style={styles.editButton} onPress={() => handlerEditPress(operacao.codigo)} >
                                        <Icon name="edit" size={20} color='blue'></Icon>
                                    </TouchableOpacity >
                                    <TouchableOpacity style={styles.editButton} onPress={() => handlerDeletePress(operacao.codigo)}>
                                        <Icon name="delete" size={20} color='blue'></Icon>
                                    </TouchableOpacity>    
                                </View>
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
        width: '98%'        ,
    },
    container: {
        backgroundColor: '#fff',
        marginTop: 3,
        width: '100%'
    },
    textItem: {
        fontSize: 20,
        margin:6,
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
        backgroundColor: 'navy',
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
        justifyContent:'space-between'
    }

})
export default OperacaoList