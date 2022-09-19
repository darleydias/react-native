import { StyleSheet,Text, TextInput, TouchableOpacity, TouchableOpacityComponent, ToucheableOpacity,View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Header  from "./Header";
import { useState } from "react";
import OperacoesServices from "../services/OperacoesServices";

export default function OperacaoEdit(props) {

    const navigation = useNavigation();
    const [codigo,setCodigo] = useState("")
    const [nome,setNome] = useState("")
    const [descricao,setDescricao] = useState("")
    const [mensagem,setMensagem] = useState("")

    async function saveOperacao(){   
        const operacao={
            codigo:codigo,
            nome:nome,
            descricao:descricao
        }
        if(props.route.params.action){
            setMensagem(await(await OperacoesServices.createOperacao(operacao)).data)
            GoToOperacoesList()
        }else{
        console.log("Vamos editar")
        }
    }    
    function GoToOperacoesList(){
        navigation.navigate("operacoesList")
    }
  
    return (
        <>
        <Header title={props.route.params.title}></Header>
        <View style={styles.inputContainer}>
                <TextInput 
                        style={styles.input}
                        placeholder="digite o código" 
                        clearButtonMode="always"
                        onChangeText={(texto)=>setCodigo(texto)}
                        value={codigo}>
                </TextInput>
                <TextInput 
                        style={styles.input}
                        placeholder="digite o Nome" 
                        clearButtonMode="always"
                        onChangeText={(texto)=>setNome(texto)}
                        value={nome}>
                </TextInput>
                <TextInput 
                        style={styles.input}
                        placeholder="digite a descrção" 
                        clearButtonMode="always"
                        onChangeText={(texto)=>setDescricao(texto)}
                        value={descricao}>
                </TextInput>
                <TouchableOpacity style={styles.button} onPress={()=>{saveOperacao()}}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    inputContainer: {
        alignItems:"stretch",
        margin:20
    },
    input:{
        marginTop:10,
        height:60,
        backgroundColor:"#fff",
        borderRadius:10,
        paddingHorizontal:24,
        fontSize:16,
        alignItems:"stretch"
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
    }
})