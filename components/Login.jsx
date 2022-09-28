import HeaderExt from "./HeaderExt"
import { useState } from "react"
import AuthServices from "../services/AuthServices"
import { StyleSheet,Text, TextInput, TouchableOpacity} from "react-native";
import { useNavigation} from "@react-navigation/native";
import ModalComponent from "./ModalComponent";

export default function Login(){

    const navigation = useNavigation();
    const [login,setLogin] = useState("")
    const [senha,setSenha] = useState("")
    const [token,setToken] = useState("")
    const [msg,setMsg] = useState("")
    const [modalVisible,setModalVisible] = useState(false)


    function GoToLogin(){
            let credential = {
                login:login,
                senha:senha
            }
            AuthServices.login(credential)
            .then((response)=>{
                AuthServices.setLoggedUser(response.data)
                navigation.navigate("comarcaList")
            },(error)=>{
                
                const erro = error.message.trim()
                if(erro==="Request failed with status code 404"){
                    setMsg("Usuário inexistente")
                    setModalVisible(true)
                }
                if(erro==="Request failed with status code 403"){
                    setMsg("Senha incorreta")
                    setModalVisible(true)
                }
            })
    }
    return(
        
        <>
        <HeaderExt title="Bem vindo"></HeaderExt>
        <Text style={styles.paragraph}>{'\n'}{'\n'}{'\n'}</Text>
               <TextInput  
                        style={styles.input}
                        placeholder="digite o usuario" 
                        clearButtonMode="always"
                        onChangeText={(texto)=>setLogin(texto)}
                        value={login||''}>
                </TextInput>
                <TextInput 
                        style={styles.input}
                        placeholder="digite a senha" 
                        clearButtonMode="always"
                        secureTextEntry={true}
                        onChangeText={(texto)=>setSenha(texto)}
                        value={senha||''}>
                </TextInput>
                <Text style={styles.paragraph}>{'\n'}</Text>
       
                <TouchableOpacity style={styles.button} onPress={()=>{GoToLogin()}}>
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
                <ModalComponent 
                            msg={msg}
                            onClose={()=>{setModalVisible(false)}}
                            modalVisible={modalVisible}
                  />
              
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
    modal: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#00ff00',
        padding: 100,
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