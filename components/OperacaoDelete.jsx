import { useNavigation,useRoute} from "@react-navigation/native";
import { useEffect} from "react";
import OperacoesServices from "../services/OperacoesServices";

export default function OperacaoDelete() {

    const navigation = useNavigation();
    const route = useRoute()
   
    useEffect(()=>{
        OperacoesServices.deleteOperacao(route.params.codigo)
        .then(()=>navigation.navigate("operacoesList"))
    },[])

    return (
        <>
        </>
    )   
}
