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
    return (
        <>
        <View style={styles.inputContainer}>

               <Text style={styles.label}>Ponto {nrPonto}</Text>
               <Text style={styles.label}>Alvo: {alvo}</Text>
               <Text style={styles.txt}>{dadosPonto}</Text>


               <SafeAreaView style={styles.containerRadio}>
                    <View style={styles.secao1}>
                        <RadioButton
                            value="first"
                            status={ checked === 'first' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('first')}
                        />
                    </View>
                    <View style={styles.secao2}>
                    <Text style={styles.txt}>Correto</Text>
                    </View>      
                    <View style={styles.secao3}>
                        <RadioButton
                            value="second"
                            status={ checked === 'second' ? 'checked' : 'unchecked' }
                            onPress={() => setChecked('second')}
                        />
                    </View>      
                    <View style={styles.secao4}>
                        <Text style={styles.txt}>Incorreto</Text>
                    </View>    
               </SafeAreaView>  
               <Text style={styles.label}>Situação do Recon</Text>
               <View>
                    <Text style={styles.txt}>{testStatus(status)} {status}</Text>
               </View>
               <Text style={styles.label}>Data Prevista    -          Data Real</Text>
               <View>
                     <Text style={styles.txt}>{dataPrev}      {dataReal}</Text>
               </View>
                         
        </View>
        <View style={styles.inputContainer}>
               
               
               <View>
                     <Text style={styles.txt}>{ponto_id}</Text>
               </View>
                <Text style={styles.label}>Confirmar endereço</Text>
               
                <TextInput 
                        style={styles.input}
                        placeholder="digite o código" 
                        clearButtonMode="always"
                        onChangeText={(texto)=>setDatPrev(texto)}
                        value={dataPrev||''}>
                </TextInput>
                <TextInput 
                        style={styles.input}
                        placeholder="digite o Nome" 
                        clearButtonMode="always"
                        onChangeText={(texto)=>setStatus(texto)}
                        value={status||''}>
                </TextInput>
                <TextInput 
                        style={styles.input}
                        placeholder="digite a descrção" 
                        clearButtonMode="always"
                        onChangeText={(texto)=>setPonto_id(texto)}
                        value={ponto_id||''}>
                </TextInput>
                <TouchableOpacity style={styles.button} onPress={()=>{saveComarca()}}>
                    <Text style={styles.buttonText}>Salvar</Text>
                </TouchableOpacity>
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
        margin:20,
        borderBottomColor:"#666",
        borderRadius:4,
        borderWidth:1
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