import { useNavigation,useRoute} from "@react-navigation/native";
import { useEffect} from "react";
import ComarcasServices from "../services/ComarcasServices";

export default function ComarcaDelete() {

    const navigation = useNavigation();
    const route = useRoute()
   
    useEffect(()=>{
        ComarcasServices.deleteComarca(route.params.codigo)
        .then(()=>navigation.navigate("comarcaList"))
    },[])

    return (
        <>
        </>
    )   
}
