import { StyleSheet,Text, TextInput, TouchableOpacity,View } from "react-native";
import { useNavigation,useRoute } from "@react-navigation/native";
import Header  from "./Header";
import { useEffect, useState } from "react";
import OperacoesServices from "../services/OperacoesServices";


export default function OperacaoShow() {

    const navigation = useNavigation();
    const [codigo,setCodigo] = useState("")
    const [nome,setNome] = useState("")
    const [descricao,setDescricao] = useState("")

    const [mensagem,setMensagem] = useState("")
    const route = useRoute()


    useEffect(()=>{
        const operacao = OperacoesServices.getOperacaoByCodigo(route.params.codigo)
        .then(operacao=>{
            setCodigo(operacao.codigo)
            setNome(operacao.nome)
            setDescricao(operacao.descricao)
        })
        
    },[])

    function fechar(){
        navigation.navigate("operacoesList")
    }
 
    return (
        <>
        <Header title={route.params.title}></Header>
        <View style={styles.inputContainer}>
               <Text style={styles.label}>Nome da operação</Text>
               <View>
                    <Text style={styles.txt}>{nome}</Text>
               </View>
               <Text style={styles.label}>descrição</Text>
               <View>
                     <Text style={styles.txt}>{descricao}</Text>
               </View>
             
        </View>
        <TouchableOpacity style={styles.button} onPress={() => fechar()}>
                    <Text style={styles.buttonText}>Fechar</Text>
        </TouchableOpacity>
        </>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        alignItems:"stretch",
        margin:20
    },
    txt:{
        marginTop:10,
        backgroundColor:"#f5f8f9",
        borderRadius:4,
        paddingHorizontal:24,
        fontSize:16,
        color: '#000406',
        alignItems:"stretch",
        justifyContent: "flex-start"
    },
    label:{
        marginTop:10,
        paddingHorizontal:10,
        fontSize:16,
        fontWeight: 'bold',
        alignItems:"stretch",
        justifyContent: "flex-start"
    },
    button: {
        margin:5,
        marginTop: 10,
        height: 40,
        backgroundColor: '#33525c',
        borderRadius: 4,
        paddingHorizontal: 24,
        fontSize: 16,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold'
    }
})