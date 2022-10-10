import axios from "axios";
import AuthServices from "./AuthServices";


const  instance = axios.create({
    // baseURL:"https://catenampmg.herokuapp.com/",
    baseURL:"http://localhost:3000/",
    header:{
        "content-type":"application/json"
    }
})

// Adicionando um interceptor de Request
instance.interceptors.request.use(async function (config) {
    let tokens= await AuthServices.getLoggedUser()
    config.headers['auth']=tokens.user_token
    config.headers['refresh']=tokens.refreshToken
    return config;
}, function (error) {
    Console.log(error)
    return Promise.reject(error);
});
// Adicionando um interceptor de Response
instance.interceptors.response.use(function (response) {
    if(response.status===203){
        const token_user = {'token':response.data.token,'refreshToken':response.data.refresh}
        AuthServices.setLoggedUser(token_user)
        //voltar para list

    }
    return response;
  }, function (error) {
    return Promise.reject(error);
});
export default instance;