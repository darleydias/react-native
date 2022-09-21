import Header from "./Header"
import { useState } from "react"
import AuthServices from "../services/AuthServices"
import { StyleSheet,Text, TextInput, TouchableOpacity,View } from "react-native";

export default function Login(){

    const [login,setLogin] = useState("")
    const [senha,setSenha] = useState("")

    function GoToLogin(){
            let credential = {
                login:login,
                senha:senha
            }
            console.log(JSON.stringify(credential))
            AuthServices.login(credential)
            .then((response)=>{
                console.log(response.data)
                AuthServices.setLoggedUser(response.data)
            })
            // console.log(JSON.stringify(credencial))
    }


    return(
        <>
        <Header title="Bem vindo"></Header>
                <TextInput  
                        style={styles.input}
                        placeholder="digite o usuario" 
                        clearButtonMode="always"
                        onChangeText={(texto)=>setLogin(texto)}
                        value={login||''}>
                </TextInput>
                <TextInput 
                        style={styles.input}
                        placeholder="digite o Nome" 
                        clearButtonMode="always"
                        onChangeText={(texto)=>setSenha(texto)}
                        value={senha||''}>
                </TextInput>
                <TouchableOpacity style={styles.button} onPress={()=>{GoToLogin()}}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>

        </>
    )
}

const styles= StyleSheet.create({
    container: {
        alignItems:"center",
        justifyContent:"center"
    },
    button: {
        margin:10,
        height:60,
        backgroundColor:"#33525c",
        borderRadius:10,
        paddingHorizontal:24,
        fontSize:16,
        alignItems:"center",
        justifyContent:"center"

    },
    buttonText: {
        color:"#fff",
        fontWeight:"bold"
    },
    input:{
        margin:10,
        marginTop:10,
        height:60,
        backgroundColor:"#fff",
        borderRadius:10,
        paddingHorizontal:24,
        fontSize:16,
        alignItems:"stretch"
    }
})