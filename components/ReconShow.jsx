import { StyleSheet,Text, TextInput, TouchableOpacity,View,SafeAreaView} from "react-native";
import { useNavigation,useRoute,useIsFocused } from "@react-navigation/native";
import { useEffect, useState,useContext } from "react";
import ReconServices from "../services/ReconServices";
import PontoService from "../services/PontoServices"
import { AuthContext } from '../contexts/Auth'
import { FaCheckCircle,FaRegClipboard} from 'react-icons/fa';
import {format, parseISO} from 'date-fns'
import ptBR from "date-fns/locale/pt-BR";
import AlvoService from "../services/AlvoService";
import { RadioButton } from 'react-native-paper';


export default function ReconShow() {

    const navigation = useNavigation();
    const [status,setStatus] = useState("")
    const [dataPrev,setDatPrev] = useState("")
    const [dataReal,setDatReal] = useState("")
    const [ponto_id,setPonto_id] = useState("")
    const [alvo_id,setAlvoId] = useState("")
    const [nrPonto,setNrPonto] = useState("")
    const [alvo,setAlvo] = useState("")
    const [complementoEndereco,setComplementoEndereco] = useState("")
    const [shouldShow, setShouldShow] = useState(false);

    
    const [dadosPonto,setDadosPonto] = useState("")
    const route = useRoute()
    const reload = useIsFocused()
    const {fillTitulo} = useContext(AuthContext)
    const [checked, setChecked] = useState('first');
 
    useEffect(()=>{
        ReconServices.getReconById(route.params.id).then(recon=>{
            let dataFormatada = recon.dataPrev.toString()
            dataFormatada = format(parseISO(dataFormatada),'dd/MM/yyyy HH:mm',{locale:ptBR})

            let dataRealFormatada = recon.dataReal.toString()
            dataRealFormatada = format(parseISO(dataRealFormatada),'dd/MM/yyyy HH:mm',{locale:ptBR})
            
            setDatReal(dataRealFormatada)
            setDatPrev(dataFormatada)
            setPonto_id(recon.ponto_id)
            setStatus(recon.status)
            setAlvoId(recon.alvo_id)
            fillTitulo('Exibe Recon') 
        })
        PontoService.getPontoById(ponto_id).then((dados)=>{
            const dadosGerais = dados.descricao+ " - " + dados.endereco + " - " + dados.complemento
            setNrPonto(dados.nrPonto)
            setDadosPonto(dadosGerais)
        })
        AlvoService.getAlvoById(alvo_id).then((alvoResult)=>{
            const dadosAlvo = alvoResult.nome
            setAlvo(dadosAlvo)
        })
        console.log(status)
    },[reload])

    function fechar(){
        navigation.navigate("Recon")
    }
    function testStatus(status){
        if(status=='Executado'){
            return <FaCheckCircle size={14} color='#33525c'></FaCheckCircle>
        }
        if(status=='Planejado'){
            return <FaRegClipboard size={14} color='#33525c'></FaRegClipboard>
        }
    }
    function mostrar(mostrar){
        if(mostrar==1){setShouldShow(true)}
        if(mostrar==0){setShouldShow(false)}
    }

    return (
        <>
        <View style={styles.container}>
        <View style={styles.inputContainer}>
               <Text style={styles.label1}>Ponto {nrPonto}</Text>
               <Text style={styles.label}>Alvo: {alvo}</Text>
               <Text style={styles.txt}>{dadosPonto}</Text>
               <SafeAreaView style={styles.containerRadio}>
                    <View style={styles.secao1}>
                        <RadioButton
                            value="first"
                            status={ checked === 'first' ? 'checked' : 'unchecked' }
                            onPress={() => {
                                setChecked('first')
                                mostrar(0)
                            }}
                        />
                    </View>
                    <View style={styles.secao2}>
                    <Text style={styles.txtRadio}>Correto</Text>
                    </View>      
                    <View style={styles.secao3}>
                        <RadioButton
                            value="second"
                            status={ checked === 'second' ? 'checked' : 'unchecked' }
                            onPress={() => {
                                setChecked('second')
                                mostrar(1)
                            }}
                        />
                    </View>      
                    <View style={styles.secao4}>
                        <Text style={styles.txtRadio}>Incorreto</Text>
                    </View>    
               </SafeAreaView>  
               {shouldShow ? (
                 <TextInput  
                    style={styles.input2}
                    multiline={true}
                    numberOfLines={4}
                    placeholder="Adicionar informações sobre endereço" 
                    clearButtonMode="always"
                    onChangeText={(texto)=>setComplementoEndereco(texto)}
                    value={complementoEndereco||''}>
                </TextInput>
               ) : null}

               <Text style={styles.label}>Situação do Recon</Text>
               <View>
                    <Text style={styles.txt}>{testStatus(status)} {status}</Text>
               </View>
               <Text style={styles.label}>Data Prevista               Data Real</Text>
               <View>
                     <Text style={styles.txt}>{dataPrev}      {dataReal}</Text>
               </View>
                         
        </View>
        <View style={styles.inputContainer}>
                <Text style={styles.label}>Orientações</Text>
                <Text style={styles.label}>Elaborar mapas, fotos ou croquis, pontos de referencia</Text>

                <Text style={styles.label}>Descrição generalizada</Text>
                <TextInput 
                        style={styles.txtArea}
                        multiline={true}
                        numberOfLines={10}
                        placeholder="Descreva o cenário observado" 
                        clearButtonMode="always"
                        // onChangeText={(texto)=>setStatus(texto)}
                        >
                </TextInput>
                <TextInput 
                        style={styles.input}
                        placeholder="digite a descrição" 
                        clearButtonMode="always"
                        // onChangeText={(texto)=>setPonto_id(texto)}
                        >
                </TextInput>      

        </View>
        <TouchableOpacity style={styles.button} onPress={()=>{saveComarca()}}>
                    <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => fechar()}>
                    <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>
        </View>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems:"stretch",
        backgroundColor:"#fff",
        backgroundColor:"#f0f0f0",

    },
    inputContainer: {
        alignItems:"stretch",
        backgroundColor:"#f5f8f9",
        margin:20,
        borderBottomColor:"#666",
        borderRadius:4,
        borderWidth:1,
        borderBottomWidth:2
    },
    containerRadio: {    
        flex: 1,    
        justifyContent: "space-between",    
        flexDirection: "row",
        marginBottom:0,
        paddingBottom:0
    },
    secao1: {
        // height: 100,
        width: 30,
    },  
    secao2: {
        // height: 100,
        width: 150,
        marginLeft:0,
        paddingLeft:0
    },
    secao3: {
        // height: 100,
        width: 30,
    },
    secao4: {
        // height: 100,
        flex: 1,
        marginLeft:0,
        paddingLeft:0
    },
    txt:{
        marginTop:10,
        paddingTop:10,
        paddingBottom:20,
        marginBottom:20,
        backgroundColor:"#f5f8f9",
        borderRadius:4,
        paddingHorizontal:24,
        fontSize:16,
        color: '#000406',
        alignItems:"stretch",
        justifyContent: "center",
        height:40
    },
    txtRadio:{
        marginTop:10,
        borderRadius:4,
        paddingHorizontal:24,
        fontSize:16,
        color: '#000406',
        alignItems:"stretch",
        justifyContent: "center",
        height:40
    },
    label:{
        marginTop:10,
        paddingHorizontal:10,
        fontSize:16,
        fontWeight: 'bold',
        alignItems:"stretch",
        justifyContent: "flex-start"
    },
    label1:{
        marginTop:10,
        paddingHorizontal:10,
        fontSize:18,
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
    },
    input:{
        margin:10,
        marginTop:10,
        height:40,
        backgroundColor:"#fff",
        borderRadius:10,
        paddingHorizontal:24,
        fontSize:16,
        alignItems:"stretch"
    },
    txtArea:{
        margin:10,
        paddingLeft:10,
        paddingTop: 10,
        height:200,
        backgroundColor:"#fff",
        borderRadius:10,
        fontSize:16,
        alignItems:"stretch",
        textAlignVertical: 'top'
    },
    input2:{
        margin:10,
        marginTop:10,
        paddingTop: 10,
        height:60,
        backgroundColor:"#fff",
        borderRadius:10,
        paddingHorizontal:24,
        fontSize:16,
        alignItems:"stretch"
    }
})