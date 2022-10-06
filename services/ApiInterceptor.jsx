import axios from "axios";
import AuthServices from "./AuthServices";

const  instance = axios.create({
    // baseURL:"https://catenampmg.herokuapp.com/",
    baseURL:"http://localhost:3000/",
    header:{
        "content-type":"application/json"
    }
})

function testaLogin(token){ //testa se o token no banco é igual ao token local e se ainda não venceu
    const loggedUser = AuthServices.getRemoteToken(token)
    .then((result)=>{
                    let dataAtual=new Date()
                    let dtExpiracao = new Date(result.data[0].expireIn)
                    let dtExpFormatada = (dtExpiracao.getDate() + " " + dtExpiracao.getHours() + ":" + dtExpiracao.getMinutes() + ":" + dtExpiracao.getSeconds()); 
                    let atualFormatada = (dataAtual.getDate() + " " + dataAtual.getHours() + ":" + dataAtual.getMinutes() + ":" + dataAtual.getSeconds()); 
                    console.log(dataAtual.getTime()) 
                    console.log(dtExpiracao.getTime()) 
                    let expirado=false;
                    if(dataAtual.getTime() > dtExpiracao.getTime()-20){
                        expirado=false;
                    }
                    if(result.data[0].token===token && expirado!=true){
                        console.log("logado")
                        return true
                    }else{
                        console.log("expirado")
                        credentials={'login':result.data[0].login,'token':result.data[0].token}
                        AuthServices.renew(credentials)
                        return false
                    }
                    
                    })
}

instance.interceptors.request.use(async (config)=>{
    let tokens= await AuthServices.getLoggedUser()

    config.headers['auth']=tokens.user_token
    config.headers['refresh']=tokens.refreshToken
    //testaLogin(token)
    return config;

},(error)=>{
    Promise.reject(error)
})
export default instance;