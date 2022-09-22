import { StyleSheet,Text, TextInput, TouchableOpacity, View } from "react-native";
import { useNavigation,useRoute} from "@react-navigation/native";
import Header  from "./Header";
import { useEffect, useState } from "react";
import ComarcasServices from "../services/ComarcasServices";

export default function ComarcaAdd() {

    const navigation = useNavigation();
    const [codigo,setCodigo] = useState("")
    const [nome,setNome] = useState("")
    const [descricao,setDescricao] = useState("")

    const [mensagem,setMensagem] = useState("")
    const route = useRoute()
   
    async function saveComarca(){   
        const comarca={
            codigo:codigo,
            nome:nome,
            descricao:descricao
        }
        console.log(JSON.stringify(comarca))
        setMensagem(await(await ComarcasServices.createComarca(comarca)))
        navigation.navigate("comarcaList")
        
    }    
  
    return (
        <>
        <Header title={route.params.title}></Header>
        <View style={styles.inputContainer}>
                <TextInput 
                        style={styles.input}
                        placeholder="digite o código" 
                        clearButtonMode="always"
                        onChangeText={(texto)=>setCodigo(texto)}
                        value={codigo||''}>
                </TextInput>
                <TextInput 
                        style={styles.input}
                        placeholder="digite o Nome" 
                        clearButtonMode="always"
                        onChangeText={(texto)=>setNome(texto)}
                        value={nome||''}>
                </TextInput>
                <TextInput 
                        style={styles.input}
                        placeholder="digite a descrção" 
                        clearButtonMode="always"
                        onChangeText={(texto)=>setDescricao(texto)}
                        value={descricao||''}>
                </TextInput>
                <TouchableOpacity style={styles.button} onPress={()=>{saveComarca()}}>
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
        backgroundColor: '#33525c',
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