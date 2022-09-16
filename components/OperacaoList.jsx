import { useNavigation } from "@react-navigation/native";
import { Header } from "@react-navigation/stack";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import { ScrollView } from "react-native";
import OperacoesServices from "../services/OperacoesServices";

export default function OperacaoList() {

    const [load,setLoad]= useState("")
    const [operacoes,setOperacoes] = useState([])
    const navigation =useNavigation();

    useEffect(()=>{
        OperacoesServices.getOperacoes().then(res=>{
            setOperacoes(res.data)
            console.log(res.data)
            setLoad(false)
        })
    },[load])

    return (
        <>
        <Text>"Lista de operações"</Text>
        <ScrollView>
            {
                operacoes.map((operacao,index)=>{
                    return(
                        <View key={index}>
                            <Text key={index}>key={operacao.nome}</Text>
                        </View>
                    )
                })
            }
        </ScrollView>
       
        </>
    )
}